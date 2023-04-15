import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
    Dropdown,
} from 'reactstrap';
import './AddUser.scss';
import { GlobalContext } from '../../Context/GlobalState';
import { v4 as uuid } from 'uuid'
import axios from 'axios';
import '../Departments/Department'
function AddUser() {
    const [post, setPost] = useState({
        name: '',
        password: ''
    });
    const [password, setPassword] = useState('');
    const [departmentName, setDepartmentName] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('https://unibackend.azurewebsites.net/api/department')
            .then((getData) => {
                setDepartmentName(getData)
            })
    })
    const onSubmit = () => {

        axios.post('https://unibackend.azurewebsites.net/api/user', {
            userName: post.name,
            password: post.password,
        })
        // addSubmission(newSubmission);
        navigate("/");
    };

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <div className='name'>
                    <Label>name</Label>
                    <Input type='text' placeholder='Enter Name Staff'
                        size="50"
                        maxLength="50" value={post.name} onChange={(e) => setPost(e.target.value)}></Input>
                </div>
                <div className='name'>
                    <Label>password</Label>
                    <Input type='password' placeholder='Enter password'
                        size="50"
                        maxLength="50" value={post.password} onChange={(e) => setPost(e.target.value)}></Input>
                </div>

                {/* {departmentName.map((department) => {

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            department
                        </Dropdown.Toggle>
                        <Dropdown.Item>{department.departmentName}</Dropdown.Item>
                    </Dropdown>
                    console.log(department)
                })} */}
            </FormGroup>

            <div className='btn'>
                <Button type='submit'>Submiss</Button>
                <Button><Link to="/">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddUser;