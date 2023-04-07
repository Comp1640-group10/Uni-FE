import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';
import './Addsubmission.scss';
import { GlobalContext } from '../../Context/GlobalState';
import { v4 as uuid } from 'uuid'

function AddSubmission() {
    const [name, setName] = useState('');
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');

    const { addSubmission } = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSubmit = () => {

        const newSubmission = {
            id: uuid(),
            name: name,
            deadline_1: date1,
            deadline_2: date2,
        };
        addSubmission(newSubmission);
        navigate("/submission");
    };
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <div className='name'>
                    <Label>name</Label>
                    <Input type='text' placeholder='Enter Name Staff'
                        size="50"
                        maxLength="50" value={name.name} onChange={(e) => setName(e.target.value)}></Input>
                </div>
                <div className='deadline_1'>
                    <Label>deadline_1</Label>
                    <Input type='date' placeholder='Enter Name Staff' value={date1} onChange={(e) => setDate1(e.target.value)}></Input>
                </div>
                <div className='deadline_2'>
                    <Label>deadline_2</Label>
                    <Input type='date' placeholder='Enter Name Staff' value={date2} onChange={(e) => setDate2(e.target.value)}></Input>
                </div>
            </FormGroup>
            <div className='btn'>
                <Button type='submit'>Submiss</Button>
                <Button><Link to="/submission">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddSubmission;