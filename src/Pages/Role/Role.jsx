import React from 'react';
import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './Role.css'
const Role = () => {
    const roleitem = [
        {
            id: 'Admin',
            name: 'Admin',
            delete: <FaTrash />,
            edit: <FaEdit />,
        },
        {
            id: 'Staff',
            name: 'Staff',
            delete: <FaTrash />,
            edit: <FaEdit />,
        },
        {
            id: 'staff 33',
            name: 'staff 33',
            delete: <FaTrash />,
            edit: <FaEdit />,
        },

    ]
    return (

        <div className=''>

            <div className='category'>
                <h3>Category Page</h3>
                {
                    roleitem.map((role, index) => (
                        <div className='icons'>
                            <div className='id'>{role.id}</div>
                            <div className='name'>{role.name}</div>
                            <div className='icon-cate'>{role.edit} {role.delete}</div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
};

export default Role;