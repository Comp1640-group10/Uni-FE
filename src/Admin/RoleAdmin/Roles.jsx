
import React, { useState, useContext, useEffect } from 'react';
import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './Roles.css'
import { NavLink } from 'react-router-dom';
import { Button, } from 'reactstrap';
import { GlobalContext } from '../../Context/GlobalState';
import axios from 'axios';

function Roles() {
    const [role, setrole] = useState([])
    const getData = () => {

        axios.get('https://unibackend.azurewebsites.net/api/role')
            .then((getData) => {
                setrole(getData.data)
            })
    }
    useEffect(() => {
        getData();
    })
    // const setId = (id) => {
    //     console.log(id)
    // }
    const deleteItem = (id) => {
        axios.delete(`https://unibackend.azurewebsites.net/api/role/${id}`)
            .then(() => {
                getData();
            })
    }
    const { submissions } = useContext(GlobalContext);
    console.log(submissions)

    return (
        <div className=''>

            <h1>Role page</h1>

            <div className='role'>

                <div className='btn'>
                    <Button>
                        <NavLink to='/addroles'>
                            new add
                        </NavLink>
                    </Button>
                </div>

                {role && role.length ? '' : 'No Item...'}
                {role.map((role) => (
                    <div className='icons' key={role.id}>
                        <div className='id'> {role.id}</div>
                        <div className='name'>{role.roleName}</div>
                        <div className='icon-cate'>
                            <NavLink to={`/editroles/${role.id}`}><span title="edit"><Button><FaEdit /></Button></span></NavLink>
                            <span title="delete" ><Button onClick={() => deleteItem(role.id)}><FaTrash /></Button></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Roles;