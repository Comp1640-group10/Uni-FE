import React, { useState } from 'react';
import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './Role.css'
const Role = () => {
    const [roleitem, setRoleItem] = useState(
        [{
            id: 'admin',
            name: 'admin'
        }]
    )

    const [newAdd, setNewAdd] = useState({
        id: '',
        name: ''
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
            id: newAdd.id,
            name: newAdd.name
        }
        const newAddItems = [...roleitem, newAddItem]
        setRoleItem(newAddItems)

    }
    const deleteItem = (index) => {
        let newAdds = roleitem.splice(index, 1)
        setNewAdd(newAdds);
    }
    return (
        <div >
            <h1>Role page</h1>
            <form onSubmit={handleSubmit} className="Role">
                <div className="input-page">
                    <div className="input_id">
                        <h3>Id</h3>
                        <input
                            type="text"
                            placeholder="add new department"
                            size="50"
                            maxLength="50"
                            name='id'
                            required='required'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input_name">
                        <h3>name Role</h3>
                        <input
                            type="text"
                            placeholder="add new department"
                            size="50"
                            maxLength="50"
                            name='name'
                            required='required'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="btn">
                        <button type='submit'>add new</button>
                    </div>
                </div>
            </form>
            <div className='wrapper'>

                <div className='role'>
                    {roleitem && roleitem.length ? '' : 'No Item...'}
                    {
                        roleitem.map((roleitem, index) => (
                            <div className='icons' key={index}>
                                <div className='id' > {roleitem.id}</div>
                                <div className='name'>{roleitem.name}</div>
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

export default Role;