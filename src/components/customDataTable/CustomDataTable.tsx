import React, { useEffect, useState } from 'react';

import DataTable from "react-data-table-component";
import "../styles/customDataTable.css";
import { DialogPopup } from '../DialogPopup/DialogPopup';
import { InputBox } from '../forms/InputBox';
import { Button } from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksDeleteServer, getTasksUpdateServer, removeTaskFromList, setSelectedTask } from '../../slices/tasksSlice';
import { useFormik } from "formik";
import * as Yup from "yup";
import validationErrors from '../../services/ValidationSchema';
interface CustomDataTableProps {
    userList?: any;
}

export const CustomDataTable: React.FC<CustomDataTableProps> = ({ userList }) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const dispatch = useDispatch<any>();
    const { selecetedTask } = useSelector((state: any) => state.tasks)

    useEffect(() => {
        if (Object.keys(selecetedTask).length !== 0) {
            formik.setFieldValue('name', selecetedTask.name);
            formik.setFieldValue('email', selecetedTask.email);
            formik.setFieldValue('id', selecetedTask.id);
        }
    }, [selecetedTask])


    const updateTask = (res: any) => {
        dispatch(setSelectedTask(res))
    }

    const deleteTask = (res: any) => {
        dispatch(getTasksDeleteServer(res))
            .unwrap()
            .then(() => {
                dispatch(removeTaskFromList(res))
            })
    }

    const columns = [
        {
            name: "Name",
            width: "170px",
            selector: (row: any) => row.name,
            cell: (row: any) => (
                <div tabIndex={0}>
                    {row && row.name ? (row.name) : ''}
                </div>
            ),
        },
        {
            name: "Email",
            width: "300px",
            selector: (row: any) => row.email,
            cell: (row: any) => (
                <div tabIndex={0}>
                    {row && row.email ? (row.email) : ''}
                </div>
            ),
        },
        {
            name: "Action",
            width: "150px",
            cell: (row: any) => (
                <div className='flex'>
                    <div className="underline cursor-pointer" onClick={() => {
                        setDialogOpen(true);
                        updateTask(row)
                    }}> View</div>

                    <div className="underline cursor-pointer ml-4" onClick={() => {
                        deleteTask(row)
                    }}> Delete</div>

                </div>

            ),
        },
    ];

    const defaultFormVal: any = {
        name: "",
        email: "",
    };

    const rejectReasonSchema = Yup.object().shape({
        name: Yup.string().required(validationErrors[1001]),
        email: Yup.string()
            .email(validationErrors[1002])
            .required(validationErrors[1029]),
    });


    const formik = useFormik({
        initialValues: defaultFormVal,
        validationSchema: rejectReasonSchema,

        onSubmit: async (values: any) => {
            console.log("values updated ", values)
            dispatch(getTasksUpdateServer(values))
            setDialogOpen(false)
        },
    });


    return (

        <>
            <div className="dashboar-action">
                <DataTable columns={columns} data={userList} />
            </div>

            <DialogPopup
                open={dialogOpen}
                showIcon
                PopupSize="md"
                closeOnOutsideClick
                onRequestClose={() => {
                    setDialogOpen(!dialogOpen);
                }}
            >
                <div>
                    <form action="submit" className="" onSubmit={formik.handleSubmit}>
                        <InputBox
                            type="text"
                            placeholder="enter name"
                            id="name"
                            name="name"
                            label='Name'
                            onChange={formik.handleChange}
                            values={formik.values.name}
                            errors={
                                formik.touched.name && formik.errors.name
                                    ? formik.errors.name
                                    : null
                            }
                        />
                        <br />
                        <InputBox
                            type="text"
                            placeholder="enter email"
                            id="email"
                            name="email"
                            label='Email'
                            onChange={formik.handleChange}
                            values={formik.values.email}
                            errors={
                                formik.touched.email && formik.errors.email
                                    ? formik.errors.email
                                    : null
                            }
                        />
                        <br />
                        <div className=' text-right'>
                            <Button
                                btntype="submit"
                                text="Update"
                                addClass="primary-btn"
                            />
                        </div>
                    </form>

                </div>
            </DialogPopup>
        </>
    );
}