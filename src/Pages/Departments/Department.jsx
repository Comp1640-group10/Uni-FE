import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './Department.css'
import { NavLink } from 'react-router-dom';
import { Button, } from 'reactstrap';

function Department() {
    const { department, removeDepartment } = useContext(GlobalContext);
    console.log(department)
    return (

        <div className=''>

            <h1>Department page</h1>

            <div className='department'>

                <div className='btn'>
                    <Button>
                        <NavLink to='/addDepartment'>
                            new add
                        </NavLink>
                    </Button>
                </div>
                {department && department.length ? '' : 'No Item...'}
                {department.map((department) => (
                    <div className='icons' >
                        <strong key={department.id}>{department.name}</strong>
                        <div className='icon-cate'>
                            <NavLink to={`/editDepartment/${department.id}`}><span title="edit"><FaEdit /></span></NavLink>
                            <span title="delete" onClick={() => removeDepartment(department.id)}><FaTrash /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Department;