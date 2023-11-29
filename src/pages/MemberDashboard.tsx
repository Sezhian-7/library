import React from 'react';
import MemberLayout from '../components/layout/MemberLayout';
import { InputBox } from '../components/forms/InputBox';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from '../components/button/Button';
import { CustomDataTable } from '../components/customDataTable/CustomDataTable';

interface MemberDashboardProps {

}

export const MemberDashboard: React.FC<MemberDashboardProps> = () => {

    const defaultFormVal: any = {
        title: "",
        description: "",
    };

    const rejectReasonSchema = Yup.object().shape({
        title: Yup.string().optional(),
        description: Yup.string().optional(),
    });


    const formik = useFormik({
        initialValues: defaultFormVal,
        validationSchema: rejectReasonSchema,

        onSubmit: async (values: any) => {
            console.log("values ", values)
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
                            <InputBox
                                type="text"
                                placeholder="enter name"
                                id="name"
                                name="name"
                                label='Name'
                            />
                            <br />
                            <InputBox
                                type="text"
                                placeholder="enter email"
                                id="email"
                                name="email"
                                label='Email'
                            />
                            <br />
                            <div className=' text-right'>
                                <Button
                                    btntype="button"
                                    text="Add"
                                    addClass="primary-btn"
                                />
                            </div>
                        </div>
                    </div>
                </section >
                <br /><br />
                <section className='block-center'>
                    <CustomDataTable userList={particiantUser} />
                </section>
            </main>       
        </MemberLayout >

    );
}
export default MemberDashboard;