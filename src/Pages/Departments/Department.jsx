import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
    FaTrash,
    FaEdit,
    FaInfoCircle
} from 'react-icons/fa';
import './Department.css'
const Department = () => {
    const [departmentitem, setDepartmentItem] = useState([
    ])

    const [newAdd, setNewAdd] = useState('')
    const handleSubmit = () => {
        setDepartmentItem(prev => [...prev, newAdd])
        setNewAdd('')
    }
    const deleteItem = (index) => {
        let newAdds = departmentitem.splice(index, 1)
        setNewAdd(newAdds);
    }
    return (
        <div>
            <h1>Department Page</h1>
            <div className="department">

                <div className="input-page">
                    <div className="input">
                        <h3>name category</h3>
                        <input
                            type="text"
                            placeholder="add new department"
                            size="50"
                            maxLength="50"
                            value={newAdd}
                            onChange={(e) => setNewAdd(e.target.value)}
                        />
                    </div>
                    <div className="btn">
                        <button onClick={handleSubmit}>add new</button>
                    </div>
                </div>
            </div>

            <div className='Wrapper'>
                <div className='department'>
                    <h1>Department Page</h1>
                    {departmentitem && departmentitem.length ? '' : 'No Item...'}
                    {
                        departmentitem.map((newAdd, index) => (
                            <div className='icons' key={index}>
                                <div className='name' title='name'>{newAdd}</div>
                                <div className='icon-cate'>
                                    <span title="edit"><FaEdit /></span>
                                    <span title="delete" onClick={() => deleteItem(index)}><FaTrash /></span>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    )
};

export default Department;