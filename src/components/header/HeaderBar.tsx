import React from 'react';

import { useSelector } from 'react-redux';

interface HeaderBarProps {

}

const HeaderBar: React.FC<HeaderBarProps> = () => {

    const { tasksList } = useSelector((state: any) => state.tasks)

    return (
        <>
            <h1 className="text-center my-4 text-primary">Project Management</h1>
            <p className="text-center lead">{`Currently ${tasksList.length} task(s) pending`}</p>
        </>
    );
}
export default HeaderBar; 