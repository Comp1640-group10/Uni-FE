import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './Submission.css'
import { NavLink } from 'react-router-dom';
import { Button, } from 'reactstrap';

function Submission() {
    const { submission, removeSubmission } = useContext(GlobalContext);
    console.log(submission)
    return (

        <div className=''>

            <h1>Submission page</h1>

            <div className='Submission'>

                <div className='btn'>
                    <Button>
                        <NavLink to='/addSubmission'>
                            new add
                        </NavLink>
                    </Button>
                </div>
                {submission && submission.length ? '' : 'No Item...'}
                {submission.map((submission) => (
                    <div className='icons' >
                        <strong key={submission.id}>{submission.name}</strong>
                        <div className='deadline_1'>{submission.deadline_1}</div>
                        <div className='deadline_2'>{submission.deadline_2}</div>
                        <div className='icon-cate'>
                            <NavLink to={`/editSubmission/${submission.id}`}><span title="edit"><FaEdit /></span></NavLink>
                            <span title="delete" onClick={() => removeSubmission(submission.id)}><FaTrash /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Submission;