import React from 'react'
import MemberLayout from '../components/layout/MemberLayout';

interface MemberDashboardProps {

}

export const MemberDashboard: React.FC<MemberDashboardProps> = () => {
    return (
        <MemberLayout>
            <h2> Member Dashboard </h2>
        </MemberLayout>

    );
}
export default MemberDashboard;