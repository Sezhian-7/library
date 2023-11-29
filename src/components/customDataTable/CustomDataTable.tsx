import React, { useState } from 'react';

import DataTable from "react-data-table-component";
import "../styles/customDataTable.css";
import { DialogPopup } from '../DialogPopup/DialogPopup';
import { InputBox } from '../forms/InputBox';
import { Button } from '../button/Button';

interface CustomDataTableProps {
    userList?: any;
}

export const CustomDataTable: React.FC<CustomDataTableProps> = ({ userList }) => {
    const [dialogOpen, setDialogOpen] = useState(false);

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
                <>
                    <span className="underline cursor-pointer">
                        <div onClick={() => {
                            setDialogOpen(true);
                        }}> View</div>
                    </span>
                    <span className="underline cursor-pointer ml-4">
                        <div onClick={() => {
                        }}> Delete</div>
                    </span>
                </>

            ),
        },
    ];

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
                            text="Update"
                            addClass="primary-btn"
                        />
                    </div>
                </div>
            </DialogPopup>
        </>
    );
}