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

const AddSubmission = () => {
    const [name, setname] = useState('');
    const { addSubmission } = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSubmit = () => {
        const newSubmission = {
            id: 4,
            name: name.name,
            deadline_1: name.deadline_1,
            deadline_2: name.deadline_2
        }
        addSubmission(newSubmission);
        navigate(`/submission`)
    }
    const onChange = (e) => {
        setname(e.target.value)
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>name</Label>
                <Input type='text' placeholder='Enter Name Staff'
                    size="50"
                    maxLength="50" value={name.name} onChange={onChange}></Input>
                <Input type='date' placeholder='Enter Name Staff' value={name.deadline_1} onChange={onChange}></Input>
                <Input type='date' placeholder='Enter Name Staff' value={name.deadline_2} onChange={onChange}></Input>
            </FormGroup>
            <div className='btn'>
                <Button type='submit'>Submiss</Button>
                <Button><Link to="/submission">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddSubmission;