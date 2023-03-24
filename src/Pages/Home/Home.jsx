import React, { useState } from 'react';
import {
    FaTrash,
    FaEdit,
    FaInfoCircle
} from 'react-icons/fa'
const Home = () => {
    const [homeItem, sethomeItem] = useState([{
        name: 'staff1@fpt.edu.vn',
    }]);
    const [newAdd, setNewAdd] = useState({
        name: '',
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
        }
        const newAddItems = [...homeItem, newAddItem]
        sethomeItem(newAddItems)

    }
    const deleteItem = (index) => {
        let newAdds = homeItem.splice(index, 1)
        setNewAdd(newAdds);
    }
    return (
        <div>
            <h1>User Page</h1>
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
                    <div className="btn">
                        <button type='submit'>add new</button>
                    </div>
                </div>
            </form>
            <div className='Submission'>
                <h3>Submission Page</h3>
                {homeItem && homeItem.length ? '' : 'No Item...'}
                {
                    homeItem.map((home, index) => (
                        <div className='icons'>
                            <div className='name'>{home.name}</div>
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
    );
};

export default Home;