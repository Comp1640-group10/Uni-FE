import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';
import './Addsubmission.scss';

const AddSubmission = () => {
    return (
        <Form>
            <FormGroup>
                <Label>name</Label>
                <Input type='text' placeholder='Enter Name Staff'
                    size="50"
                    maxLength="50"></Input>
                <Input type='date' placeholder='Enter Name Staff'></Input>
                <Input type='date' placeholder='Enter Name Staff'></Input>
            </FormGroup>
            <div className='btn'>
                <Button type='submiss'>Submiss</Button>
                <Button><NavLink to="/submission">cancel</NavLink></Button>
            </div>
        </Form>
    );
}

export default AddSubmission;