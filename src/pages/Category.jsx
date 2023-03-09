/* eslint-disable no-undef */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FaTrash,
    FaEdit,
    FaInfoCircle
} from 'react-icons/fa'
import './Category.css'
import { NavLink } from 'react-router-dom';

const Category = () => {
    const categoryitem = [
        {
            name: 'staff 1',
            delete: <FaTrash />,
            edit: <FaEdit />,
            detail: <FaInfoCircle />
        },
        {
            name: 'staff 2',
            delete: <FaTrash />,
            edit: <FaEdit />,
            detail: <FaInfoCircle />
        },
        {
            name: 'staff 3',
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
                    categoryitem.map((category, index) => (
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

export default Category;