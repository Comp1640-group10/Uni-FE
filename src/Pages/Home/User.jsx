import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './User.css'
import { NavLink } from 'react-router-dom';
import { Button, } from 'reactstrap';

function User() {
    const { user, removeUser } = useContext(GlobalContext);
    console.log(user)
    return (

        <div className=''>

            <h1>User page</h1>

            <div className='user'>

                <div className='btn'>
                    <Button>
                        <NavLink to='/addUser'>
                            new add
                        </NavLink>
                    </Button>
                </div>
                {user && user.length ? '' : 'No Item...'}
                {user.map((user) => (
                    <div className='icons' >
                        <strong key={user.id}>{user.email}</strong>
                        <div className='icon-cate'>
                            <NavLink to={`/editUser/${user.id}`}><span title="edit"><FaEdit /></span></NavLink>
                            <span title="delete" onClick={() => removeUser(user.id)}><FaTrash /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default User;