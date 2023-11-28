import React from 'react'
import MemberLayout from '../components/layout/MemberLayout';
import { InputBox } from '../components/forms/InputBox';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from '../components/button/Button';

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

    return (
        <MemberLayout>
            <section>
                <div className="main-section">
                    <div className="block-center">
                        <br /><br />
                        <InputBox
                            type="text"
                            placeholder="enter title"
                            id="title"
                            name="title"
                            label='Title'
                        />
                        <br />
                        <InputBox
                            type="text"
                            placeholder="enter description"
                            id="description"
                            name="description"
                            label='Description'
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

            <section>
                <h3> List section</h3>
            </section>
        </MemberLayout >

    );
}
export default MemberDashboard;