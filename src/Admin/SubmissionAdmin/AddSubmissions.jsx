import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';
import "./AddSubmissions.scss";
import { GlobalContext } from '../../Context/GlobalState';
import { v4 as uuid } from 'uuid';
import axois from 'axios';
import './AddSubmissions';

function AddSubmissions(props) {
    const [topicName, setTopicName] = useState('');
    const [closureDate, setClosureDate] = useState('');
    const [finalClosureDate, setFinalClosureDate] = useState('');

    const { addSubmission } = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSubmit = () => {

        axois.post('https://unibackend.azurewebsites.net/api/topic', {
            topicName,
            closureDate,
            finalClosureDate
        })
        // addSubmission(newSubmission);
        navigate("/submissions");
    };

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <div className='name'>
                    <Label>name</Label>
                    <Input type='text' placeholder='Enter Name Staff'
                        size="50"
                        maxLength="50" onChange={(e) => setTopicName(e.target.value)}></Input>
                </div>
                <div className='deadline_1'>
                    <Label>deadline_1</Label>
                    <Input type='date' placeholder='Enter Name Staff' onChange={(e) => setClosureDate(e.target.value)}></Input>
                </div>
                <div className='deadline_2'>
                    <Label>deadline_2</Label>
                    <Input type='date' placeholder='Enter Name Staff' onChange={(e) => setFinalClosureDate(e.target.value)}></Input>
                </div>
            </FormGroup>
            <div className='btn'>
                <Button type='submit'>Submiss</Button>
                <Button><Link to="/submissions">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddSubmissions;