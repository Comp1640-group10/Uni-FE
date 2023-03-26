import React, { useState } from 'react';
import {
    FaTrash,
    FaEdit,
    FaInfoCircle
} from 'react-icons/fa'
import './Submission.css'
const Submission = () => {
    const [submissionitem, setSubmissionItem] = useState([{
        name: 'meet',
        deadline_1: '03/11/2022',
        deadline_2: '04/11/2022',
    }]);
    const [newAdd, setNewAdd] = useState({
        name: '',
        deadline_1: '',
        deadline_2: '',
    })

    const handleChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormAdd = { ...newAdd };
        newFormAdd[fieldName] = fieldValue
        setNewAdd(newFormAdd);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const newAddItem = {
            name: newAdd.name,
            deadline_1: newAdd.deadline_1,
            deadline_2: newAdd.deadline_2
        }
        const newAddItems = [...submissionitem, newAddItem]
        setSubmissionItem(newAddItems)

    }
    const deleteItem = (index) => {
        let newAdds = submissionitem.splice(index, 1)
        setNewAdd(newAdds);
    }
    return (

        <div className=''>
            <h1>Submission page</h1>
            <form onSubmit={handleSubmit} className="Role">
                <div className="input-page">
                    <div className="input_name">
                        <h3>Name Submission</h3>
                        <input
                            type="text"
                            placeholder="add new submission"
                            size="50"
                            maxLength="50"
                            name='name'
                            required='required'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input_name">
                        <h3>deadline 1</h3>
                        <input
                            type="date"
                            placeholder="add new deadline_1"
                            maxLength="50"
                            name='deadline_1'
                            required='required'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input_name">
                        <h3>deadline 2</h3>
                        <input
                            type="date"
                            placeholder="add new deadline_2"
                            maxLength="50"
                            name='deadline_2'
                            required='required'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="btn">
                        <button type='submit'>add new</button>
                    </div>
                </div>
            </form>
            <div className='Submission'>
                <h3>Submission Page</h3>
                {submissionitem && submissionitem.length ? '' : 'No Item...'}
                {
                    submissionitem.map((submission, index) => (
                        <div className='icons'>
                            <div className='name'>{submission.name}</div>
                            <div className='deadline_1'>{submission.deadline_1}</div>
                            <div className='deadline_2'>{submission.deadline_2}</div>
                            <div className='icon-cate'>
                                <span title="edit"><FaEdit /></span>
                                <span title="delete" onClick={() => deleteItem(index)}><FaTrash /></span>
                                <span title="detail" ><FaInfoCircle /></span>

                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    )
};

export default Submission;