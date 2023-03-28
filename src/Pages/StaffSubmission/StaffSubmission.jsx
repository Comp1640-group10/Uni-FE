import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Submission/Submission'
import {
    FaFileExcel,
    FaFolder,
    FaInfoCircle
} from 'react-icons/fa'
import './StaffSubmission.css'
const StaffSubmission = (props) => {
    return (

        <div className='icons'>
            <div className='name'>{props.name}</div>
            <div className='icon-cate'>
                <span title="detail" ><NavLink to='/listOfIdeas' ><FaInfoCircle /></NavLink></span>
                <span title="folder" ><FaFolder /></span>
                <span title="excel" ><FaFileExcel /></span>
            </div>
        </div>

    );
};

export default StaffSubmission;