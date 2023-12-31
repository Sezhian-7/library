import React, { useEffect } from 'react';
import MemberLayout from '../components/layout/MemberLayout';
import { InputBox } from '../components/forms/InputBox';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from '../components/button/Button';
import { CustomDataTable } from '../components/customDataTable/CustomDataTable';
import validationErrors from '../services/ValidationSchema';
import { getTasksFromServer, getTasksPostServer } from '../slices/tasksSlice';
import { useDispatch, useSelector } from 'react-redux';

interface MemberDashboardProps {

}

export const MemberDashboard: React.FC<MemberDashboardProps> = () => {
    const dispatch = useDispatch<any>();

    const { tasksList } = useSelector((state: any) => state.tasks)

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
            try {
                console.log("values ", values)
                await dispatch(getTasksPostServer(values));
                formik.setFieldValue('name', '');
                formik.setFieldValue('email', '');
            } catch (error) {
                console.log("error", error);
            }
        },
    });

    // const particiantUser = [{
    //     id: 1,
    //     firstName: "Sabapathi",
    //     lastName: "S",
    //     email: "sabapathi@mindwaveventures.com"
    // },
    // {
    //     id: 2,
    //     firstName: "Lena",
    //     lastName: "Sri",
    //     email: "lena@mindwaveventures.com"
    // },
    // {
    //     id: 3,
    //     firstName: "Smith",
    //     lastName: "jon",
    //     email: "lena@mindwaveventures.com"
    // }
    // ];

    useEffect(() => {
        dispatch(getTasksFromServer());
    }, [dispatch]);

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
