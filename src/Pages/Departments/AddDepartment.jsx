import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    FormGroup,
    Input,
    Button,
} from 'reactstrap';
import './AddDepartment.scss';
import { GlobalContext } from '../../Context/GlobalState';
import { v4 as uuid } from 'uuid'

function AddDepartment() {
    const [name, setName] = useState('');
    const { addDepartment } = useContext(GlobalContext);
    const navigate = useNavigate();

    const onSubmit = () => {

        const newDepartment = {
            id: uuid(),
            name: name,
        };
        addDepartment(newDepartment);
        navigate("/department");
    };
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <div className='name'>
                    <Label>name department</Label>
                    <Input type='text' placeholder='Enter Name Department'
                        size="50"
                        maxLength="50" value={name} onChange={(e) => setName(e.target.value)}></Input>
                </div>
            </FormGroup>
            <div className='btn'>
                <Button type='submit'>Submiss</Button>
                <Button><Link to="/department">cancel</Link></Button>
            </div>
        </Form>
    );
}

export default AddDepartment;