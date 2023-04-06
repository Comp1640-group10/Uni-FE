import React, { useState, useContext } from 'react';
import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './Role.css'
import { NavLink } from 'react-router-dom';
import { Button, } from 'reactstrap';
import { GlobalContext } from '../../Context/GlobalState';
function Role() {
    const { role, removeRole } = useContext(GlobalContext);
    console.log(role)

    return (
        <div className=''>

            <h1>Submission page</h1>

            <div className='role'>

                <div className='btn'>
                    <Button>
                        <NavLink to='/addRole'>
                            new add
                        </NavLink>
                    </Button>
                </div>

                {role && role.length ? '' : 'No Item...'}
                {role.map((role) => (
                    <div className='icons' key={role.id}>
                        <div className='id'> {role.id}</div>
                        <div className='name'>{role.name}</div>
                        <div className='icon-cate'>
                            <NavLink to={`/editRole/${role.id}`}><span title="edit"><FaEdit /></span></NavLink>
                            <span title="delete" onClick={() => removeRole(role.id)}><FaTrash /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Role;