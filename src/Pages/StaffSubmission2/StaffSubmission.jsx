import React, { useContext, useEffect, useState } from 'react';
import '../Submission/Submission'
import {
    FaFileExcel,
    FaFolder,
    FaInfoCircle
} from 'react-icons/fa'
import './StaffSubmission.css'
import { GlobalContext } from '../../Context/GlobalState';
import axios from 'axios';
function StaffSubmission() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://unibackend.azurewebsites.net/api/topic')
            .then((getData) => {
                setData(getData.data)
            })
    })
    // const setId = (id) => {
    //     console.log(id)
    // }
    const { submission } = useContext(GlobalContext);
    console.log(submission)
    return (

        <div className=''>

            <h1>Staff Submission page</h1>

            <div className='Submission'>

                {data && data.length ? '' : 'No Item...'}
                {data.map((data) => (
                    <div className='icons' >
                        <strong key={data.id}>{data.topicName}</strong>
                        <div className='deadline_1'>{data.closureDate}</div>
                        <div className='deadline_2'>{data.finalClosureDate}</div>
                        <div className='icon-cate'>
                            <span title="detail" ><FaInfoCircle /></span>
                            <span title="folder" ><FaFolder /></span>
                            <span title="excel" ><FaFileExcel /></span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StaffSubmission;