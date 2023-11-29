import React from 'react';
import MemberLayout from '../components/layout/MemberLayout';
import { InputBox } from '../components/forms/InputBox';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from '../components/button/Button';
import { CustomDataTable } from '../components/customDataTable/CustomDataTable';
import validationErrors from '../services/ValidationSchema';
import { addTaskToList } from '../slices/tasksSlice';
import { useDispatch } from 'react-redux';


import { useSelector } from 'react-redux';


interface MemberDashboardProps {

}

export const MemberDashboard: React.FC<MemberDashboardProps> = () => {
    const dispatch = useDispatch();

    const { tasksList } = useSelector((state: any) => state.tasks)


    const defaultFormVal: any = {
        name: "",
        email: "",
    };

    const rejectReasonSchema = Yup.object().shape({
        name: Yup.string().required(validationErrors[1001]),
        email: Yup.string().required(validationErrors[1030]),
    });


    const formik = useFormik({
        initialValues: defaultFormVal,
        validationSchema: rejectReasonSchema,

        onSubmit: async (values: any) => {
            console.log("values ", values)
            dispatch(addTaskToList(values))
            formik.setFieldValue('name', '');
            formik.setFieldValue('email', '');
        },
    });

    const particiantUser = [{
        id: 1,
        firstName: "Sabapathi",
        lastName: "S",
        email: "sabapathi@mindwaveventures.com"
    },
    {
        id: 2,
        firstName: "Lena",
        lastName: "Sri",
        email: "lena@mindwaveventures.com"
    },
    {
        id: 3,
        firstName: "Smith",
        lastName: "jon",
        email: "lena@mindwaveventures.com"
    }
    ];

    return (
        <MemberLayout>
            <main>

                <section>
                    <div className="main-section">
                        <div className="block-center">
                            <br /><br />
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
                                        text="Add"
                                        addClass="primary-btn"
                                    />
                                </div>
                            </form>

                        </div>
                    </div>
                </section >
                <br /><br />
                <section className='block-center'>
                    < CustomDataTable userList={tasksList} />
                </section>
            </main>
        </MemberLayout >

    );
}
export default MemberDashboard;