import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../Submission/Submission'
import {
    FaFileExcel,
    FaFolder,
    FaInfoCircle
} from 'react-icons/fa'
import './StaffSubmission.css'
import { GlobalContext } from '../../Context/GlobalState';
import { Button, } from 'reactstrap';
function StaffSubmission(props) {
    const { submission } = useContext(GlobalContext);
    console.log(submission)
    return (

        <div className=''>

            <h1>Staff Submission page</h1>

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
                            <NavLink to={`/listOfIdeas/${submission.id}`}><span title="detail"><FaInfoCircle /></span></NavLink>
                            <span title="excel" ><FaFileExcel /></span>
                            <span title="folder" ><FaFolder /></span>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StaffSubmission;