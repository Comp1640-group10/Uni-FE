import React from 'react';
import {
    FaTrash,
    FaEdit,
    FaInfoCircle
} from 'react-icons/fa'
import './Submission.css'
const Submission = () => {
    const submissionitem = [
        {
            name: 'Idea about improving team work',
            deadline_1: '2/26/2023 11:49:00PM',
            deadline_2: '3/14/2022 11:18:00 AM',
            delete: <FaTrash />,
            edit: <FaEdit />,
            detail: <FaInfoCircle />
        },
        {
            name: 'heat electricity',
            deadline_1: '2/26/2023 11:49:00PM',
            deadline_2: '3/14/2022 11:18:00 AM',
            delete: <FaTrash />,
            edit: <FaEdit />,
            detail: <FaInfoCircle />
        },
        {
            name: 'Newest submission',
            deadline_1: '2/26/2023 11:49:00PM',
            deadline_2: '3/14/2022 11:18:00 AM',
            delete: <FaTrash />,
            edit: <FaEdit />,
            detail: <FaInfoCircle />
        },

    ]
    return (

        <div className=''>

            <div className='category'>
                <h3>Category Page</h3>
                {
                    submissionitem.map((submission, index) => (
                        <div className='icons'>
                            <div className='name'>{submission.name}</div>
                            <div className='deadline_1'>{submission.deadline_1}</div>
                            <div className='deadline_2'>{submission.deadline_2}</div>
                            <div className='icon-cate'>{submission.edit} {submission.delete} {submission.detail}</div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
};

export default Submission;