import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/login/Login';
import appUrls from "../services/AppURLs";
import MemberDashboard from '../pages/MemberDashboard';
import  Verify  from '../components/login/Verify';

interface indexProps {

}

const AppRoute: React.FC<indexProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={appUrls.user.login} element={<Login />} />
                <Route path={appUrls.user.verify} element={<Verify />} />
                <Route path={appUrls.dashboard} element={<MemberDashboard />} />
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoute;
