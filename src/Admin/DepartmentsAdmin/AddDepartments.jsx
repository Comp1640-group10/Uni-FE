import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';
import "./AddDepartments.scss";
import axios from 'axios';

function AddDepartments() {
    const [departmentName, setDepartmentName] = useState('');

    const navigate = useNavigate();

    const onSubmit = () => {

        axios.post('https://unibackend.azurewebsites.net/api/department', {
            departmentName
        })
        // addSubmission(newSubmission);
        navigate("/departments");
    };
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <div className='name'>
                    <Label>name department</Label>
                    <Input type='text' placeholder='Enter Name Department'
                        size="50"
                        maxLength="50" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)}></Input>
                </div>
            </FormGroup>
            <div className='btn'>
                <Button type='submit'>Submiss</Button>
                <Button><Link to="/departments">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddDepartments;