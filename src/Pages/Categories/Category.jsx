
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Category'
import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './Category.css'
import { GlobalContext } from '../../Context/GlobalState';
import { Button } from 'reactstrap';
import axios from 'axios';
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`;
function Category() {

    const [data, setData] = useState([])
    // let date = data.toString()

    const getData = () => {
        axios.get('https://unibackend.azurewebsites.net/api/category')
            .then((res) => {

                console.log("after convert:", res.data)
                setData(res.data)
            })
    }
    // const { submission } = useContext(GlobalContext);
    // console.log(submission)
    // const setToLocalStorage = (id, topicName, closureDate, finalClosureDate) => {
    //     localStorage.setItem('id', id)
    //     localStorage.setItem('topicName', topicName)
    //     localStorage.setItem('closureDate', closureDate.toDateString())
    //     localStorage.setItem('finalClosureDate', finalClosureDate)

    // }
    const setToLocalStorage = (id, categoryName) => {
        localStorage.setItem('id', id)
        localStorage.setItem('categoryName', categoryName)


    }
    useEffect(() => {

        getData();
    }, [])
    const deleteItem = (id) => {
        axios.delete(`https://unibackend.azurewebsites.net/api/category/${id}`)
            .then(() => {
                getData();
            })
    }

    return (

        <div className=''>

            <h1>Categories page</h1>

            <div className='category'>

<div className='btn'>
                    <Button>
                        <NavLink to='/addUser'>
                            new add
                        </NavLink>
                    </Button>
                </div>

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


                {data && data.length ? '' : 'No Item...'}
                {data.map((datas) => (
                    <div className='icons' key={datas.id}>
                        <div>{datas.categoryName}</div>
                        <div className='icon-cate'>
                            <Link to={`/editSubmission/${datas.id}`} onClick={() => setToLocalStorage(datas.id, datas.categoryName)} > <span title="edit" ><Button><FaEdit /></Button></span></Link>
                            <span title="delete" ><Button onClick={() => deleteItem(datas.id)}><FaTrash /></Button></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
