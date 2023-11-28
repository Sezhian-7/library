import React from 'react';

interface HeaderBarProps {

}

const HeaderBar: React.FC<HeaderBarProps> = () => {
    return (
        <>
            <h1 className="text-center my-4 text-primary">Project Management</h1>
            <p className="text-center lead">Currently 0 task(s) pending</p>
        </>
    );
}
export default HeaderBar; 