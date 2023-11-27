import React, { useEffect } from 'react'
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface VerifyProps {

}

const Verify: React.FC<VerifyProps> = () => {
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const token = searchParams.get("token");
        axios
            .post(
                "http://localhost:3080/auth/signupVerify",
                { token },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((data) => {
                console.log("RES CHECK------------", data);
                if (data.data.msg === "Account Verified") {              
                    successToast(100);
                    
                } else {
                    console.error("Verification failed:", data);
                }
            })

            .catch((error) => {
                console.error("Error verifying token:", error);
            });
    }, [location.search, navigate]);


    const successToast = (percentage: Number) => {
        toast.dismiss();
        if (percentage === 100) {
            toast.success("The users data fetching successfully.", {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };


    return (

        <div>
            <h2>Verify Page</h2>
            <p>This is the Verify page.</p>
            <ToastContainer />
        </div>

    );
}
export default Verify;