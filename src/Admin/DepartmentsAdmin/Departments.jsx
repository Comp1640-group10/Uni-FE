import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import "./Departments.css";
import { NavLink } from 'react-router-dom';
import { Button, } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Departments() {
    const [name, setName] = useState([])
    useEffect(() => {
        axios.get('https://unibackend.azurewebsites.net/api/department')
            .then((getData) => {
                setName(getData.data)
            })
    })
    // const setId = (id) => {
    //     console.log(id)
    // }
    const { submission } = useContext(GlobalContext);
    console.log(submission)
    return (

        <div className=''>

            <h1>Department page</h1>

            <div className='department'>

                <div className='btn'>
                    <Button>
                        <NavLink to='/AddDepartments'>
                            new add
                        </NavLink>
                    </Button>
                </div>
                {name && name.length ? '' : 'No Item...'}
                {name.map((department) => (
                    <div className='icons' >
                        <strong key={department.id}>{department.departmentName}</strong>
                        <div className='icon-cate'>
                            <NavLink to={`/EditDepartments/${department.id}`}><span title="edit"><Button><FaEdit /></Button></span></NavLink>
                            <Button><span title="delete" onClick={() => setName(department.id)}><FaTrash /></span></Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Departments;