import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FaTrash,
    FaEdit,
    FaInfoCircle
} from 'react-icons/fa'
import './Category.css'
const Department = () => {
    const departmentitem = [
        {
            name: 'Department 01',
            delete: <FaTrash />,
            edit: <FaEdit />,
            detail: <FaInfoCircle />
        },
        {
            name: 'Department 02',
            delete: <FaTrash />,
            edit: <FaEdit />,
            detail: <FaInfoCircle />
        },
        {
            name: 'Department 03',
            delete: <FaTrash />,
            edit: <FaEdit />,
            detail: <FaInfoCircle />
        },

    ]
    return (

        <div className='wrapper'>

            <div className='category'>
                <h3>Category Page</h3>
                {
                    departmentitem.map((category, index) => (
                        <div className='icons'>
                            <div className='name'>{category.name}</div>
                            <div className='icon-cate'>{category.edit} {category.delete} {category.detail}</div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
};

export default Department;