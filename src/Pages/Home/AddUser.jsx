import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';
import './AddUser.scss';
import { GlobalContext } from '../../Context/GlobalState';
import { v4 as uuid } from 'uuid'

function AddUser() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { addUser } = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSubmit = () => {

        const newUser = {
            id: uuid(),
            name: email,
            password: password,
            confirm_password: confirmPassword,
        };
        addUser(newUser);
        navigate("/");
    };
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <div className='name'>
                    <Label>name</Label>
                    <Input type='text' placeholder='Enter Name Staff'
                        size="50"
                        maxLength="50" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                </div>
                <div className='name'>
                    <Label>password</Label>
                    <Input type='text' placeholder='Enter password'
                        size="50"
                        maxLength="50" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                </div>
                <div className='name'>
                    <Label>confirm password</Label>
                    <Input type='text' placeholder='Enter confirm password'
                        size="50"
                        maxLength="50" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Input>
                </div>
            </FormGroup>
            <div className='btn'>
                <Button type='submit'>Submiss</Button>
                <Button><Link to="/">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddUser;