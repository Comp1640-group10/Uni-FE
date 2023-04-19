import React, { useState } from "react";
import "./Categories.css";
import { FaTrash, FaEdit } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

const Categories = () => {
    const [categoriesitem, setCategoriesItem] = useState([
    ])

    const [newAdd, setNewAdd] = useState('')
    const handleSubmit = () => {
        setCategoriesItem(prev => [...prev, newAdd])
        setNewAdd('')
    }
    const deleteItem = (index) => {
        let newAdds = categoriesitem.splice(index, 1)
        setNewAdd(newAdds);
    }

    return (
        <div>
            <h1>Category Page</h1>
            <div className="categories">

                <div className="input-page">
                    <div className="input">
                        <h3>name category</h3>
                        <input
                            type="text"
                            placeholder="add new category"
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

                <div className="wrapper">
                    <div className='categories'>
                        <h1>Category Page</h1>
                        {categoriesitem && categoriesitem.length ? '' : 'No Item...'}
                        {
                            categoriesitem.map((newAdd, index) => (
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
        </div>
    );
};

export default Categories;