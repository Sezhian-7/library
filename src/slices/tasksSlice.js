import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    tasksList: [],
    selecetedTask: {},
    isLoading: false,
    error: ''
}

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

const tasksSlice = createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {
        addTaskToList: (state, action) => {
            const id = Math.random() * 100;
            let task = { ...action.payload, id }
            state.tasksList.push(task);
        },
        removeTaskFromList: (state, action) => {
            state.tasksList = state.tasksList.filter((task) => task.id !== action.payload.id);
        },
        updateTaskInList: (state, action) => {
            state.tasksList = state.tasksList.map((task) => task.id === action.payload.id ? action.payload : task);
        },
        setSelectedTask: (state, action) => {
            state.selecetedTask = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTasksFromServer.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTasksFromServer.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.tasksList = action.payload;
            })
            .addCase(getTasksFromServer.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
                state.tasksList = [];
            })
    }
})

export const { addTaskToList, removeTaskFromList, updateTaskInList, setSelectedTask } = tasksSlice.actions;

export default tasksSlice.reducer