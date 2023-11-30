import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    tasksList: [],
    selecetedTask: {},
    isLoading: false,
    error: ''
}
// Get method
export const getTasksFromServer = createAsyncThunk(
    "tasks/getTasksFromServer",
    async (_, { rejectWithValue }) => {
        const response = await axios.get('http://localhost:8000/tasks');
        if (response) {
            return response.data;
        } else {
            return rejectWithValue({ error: 'No Data Found' })
        }
    }
)

// Post method
export const getTasksPostServer = createAsyncThunk(
    "tasks/getTasksPostServer",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8000/tasks', payload)
            if (response) {
                return response.data;
            }
        } catch (error) {
            return rejectWithValue({ error: 'Task not added' })
        }
    }
)

// Update method
export const getTasksUpdateServer = createAsyncThunk(
    "tasks/getTasksUpdateServer",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`http://localhost:8000/tasks/${payload.id}`, payload);
            if (response) {
                return response.data;
            }
        } catch (error) {
            return rejectWithValue({ error: 'Task not Updated' })
        }
    }
)

// Delete method
export const getTasksDeleteServer = createAsyncThunk(
    "tasks/getTasksDeleteServer",
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`http://localhost:8000/tasks/${payload.id}`);
            if (response) {
                return response.data;
            }
        } catch (error) {
            return rejectWithValue({ error: 'Task not deleted' })
        }
    }
)


const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTaskToList: (state: any, action: any) => {
            const id = Math.random() * 100;
            let task = { ...action.payload, id }
            state.tasksList.push(task);
        },
        removeTaskFromList: (state: any, action: any) => {
            state.tasksList = state.tasksList.filter((task: any) => task.id !== action.payload.id);
        },
        updateTaskInList: (state: any, action: any) => {
            state.tasksList = state.tasksList.map((task: any) => task.id === action.payload.id ? action.payload : task);
        },
        setSelectedTask: (state: any, action: any) => {
            state.selecetedTask = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTasksFromServer.pending, (state: any) => {
                state.isLoading = true;
            })
            .addCase(getTasksFromServer.fulfilled, (state: any, action: any) => {
                state.isLoading = false;
                state.error = '';
                state.tasksList = action.payload;
            })
            .addCase(getTasksFromServer.rejected, (state: any, action: any) => {
                state.isLoading = false;
                state.error = action.payload.error;
                state.tasksList = [];
            })

            .addCase(getTasksPostServer.pending, (state: any) => {
                state.isLoading = true;
            })
            .addCase(getTasksPostServer.fulfilled, (state: any, action: any) => {
                state.isLoading = false;
                state.error = '';
                state.tasksList.push(action.payload);
            })
            .addCase(getTasksPostServer.rejected, (state: any, action: any) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            .addCase(getTasksUpdateServer.pending, (state: any) => {
                state.isLoading = true;
            })
            .addCase(getTasksUpdateServer.fulfilled, (state: any, action: any) => {
                state.isLoading = false;
                state.error = '';
                state.tasksList = state.tasksList.map((task: any) => task.id === action.payload.id ? action.payload : task);
            })
            .addCase(getTasksUpdateServer.rejected, (state: any, action: any) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            .addCase(getTasksDeleteServer.pending, (state: any) => {
                state.isLoading = true;
            })
            .addCase(getTasksDeleteServer.fulfilled, (state: any, action: any) => {
                state.isLoading = false;
                state.error = '';
            })
            .addCase(getTasksDeleteServer.rejected, (state: any, action: any) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
    }
})

export const { addTaskToList, removeTaskFromList, updateTaskInList, setSelectedTask } = tasksSlice.actions;

export default tasksSlice.reducer