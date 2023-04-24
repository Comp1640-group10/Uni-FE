import React, { useContext, useState, useEffect } from 'react';
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
import axios from 'axios';
function AddSubmission() {
    const [fullName, setfullName] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setfullName(localStorage.getItem('fullName'))
    }, [])
    const sendDatatoApi = () => {

        axios.post(`https://unibackend.azurewebsites.net/api/user`, {
            fullName
        })
        // addSubmission(newSubmission);
        navigate("/user");
    };
    return (
        <Form>
            <FormGroup>
                <div className='name'>
                    <Label>name</Label>
                    <Input type='text' placeholder='Enter full Name'
                        size="50"
                        maxLength="50" value={fullName} onChange={(e) => setfullName(e.target.value)}></Input>
                </div>
            </FormGroup>
            <div className='btn'>
                <Button type='submit' onClick={sendDatatoApi}>Submiss</Button>
                <Button><Link to="/submission">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddSubmission;