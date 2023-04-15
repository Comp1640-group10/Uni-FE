import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Submission'
import {
    FaTrash,
    FaEdit,
} from 'react-icons/fa'
import './Addsubmission.scss'
import { GlobalContext } from '../../Context/GlobalState';
import { Button, } from 'reactstrap';
import axios from 'axios';
function Submission() {
    const [data, setData] = useState([])
    const getData = () => {
        axios.get('https://unibackend.azurewebsites.net/api/topic')
            .then((res) => {
                setData(res.data)
            })
    }
    // const { submission } = useContext(GlobalContext);
    // console.log(submission)
    const setDatatoItem = (id, topicName, closureDate, finalClosureDate) => {
        console.log(id)
        localStorage.setItem('id', id)
        localStorage.setItem('topicName', topicName)
        localStorage.setItem('closureDate', closureDate)
        localStorage.setItem('finalClosureDate', finalClosureDate)

    }
    useEffect(() => {

        getData();
    }, [])
    const deleteItem = (id) => {
        axios.delete(`https://unibackend.azurewebsites.net/api/topic/${id}`)
            .then(() => {
                getData();
            })
    }
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
                {data && data.length ? '' : 'No Item...'}
                {data.map((datas) => (
                    <div className='icons' >
                        <strong key={datas.id}>{datas.topicName}</strong>
                        <div className='deadline_1'>{datas.closureDate}</div>
                        <div className='deadline_2'>{datas.finalClosureDate}</div>
                        <div className='icon-cate'>
                            <Link to={`/editSubmission/${datas.id}`} onChange={() => setDatatoItem(datas.id, datas.topicName, datas.closureDate, datas.finalClosureDate)}> <span title="edit" ><Button><FaEdit /></Button></span></Link>
                            <span title="delete" ><Button onClick={() => deleteItem(datas.id)}><FaTrash /></Button></span>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Submission;