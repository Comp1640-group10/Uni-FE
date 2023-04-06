import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './Category.css'
import { NavLink } from 'react-router-dom';
import { Button, } from 'reactstrap';

function Category() {
    const { category, removeCategory } = useContext(GlobalContext);
    console.log(category)
    return (

        <div className=''>

            <h1>Category page</h1>

            <div className='category'>

                <div className='btn'>
                    <Button>
                        <NavLink to='/addCategory'>
                            new add
                        </NavLink>
                    </Button>
                </div>
                {category && category.length ? '' : 'No Item...'}
                {category.map((category) => (
                    <div className='icons' >
                        <strong key={category.id}>{category.name}</strong>
                        <div className='icon-cate'>
                            <NavLink to={`/editCategory/${category.id}`}><span title="edit"><FaEdit /></span></NavLink>
                            <span title="delete" onClick={() => removeCategory(category.id)}><FaTrash /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;