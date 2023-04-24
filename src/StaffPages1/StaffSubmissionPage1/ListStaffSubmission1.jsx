import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import "./StaffSubmission1.css";

const ListStaffSubmission1 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://unibackend.azurewebsites.net/api/topic')
            .then((getData) => {
                setData(getData.data)
            })
    })
    return (
        <div>
            <NavLink to={"/HomePageStaff1"}>Back</NavLink>
            <h1>List of Ideas</h1>
            <div>
                {/* <div className="name">
                    <div className="Titile_name">{this.props.name}</div>
                </div> */}
                {data && data.length ? '' : 'No Item...'}
                {data.map((data) => (
                    <div className='icons' >
                        <strong key={data.id}>Name: {data.topicName}</strong>
                        <div className='deadline_1'>Deadline_1: {data.closureDate}</div>
                        <div className='deadline_2'>Deadline_2: {data.finalClosureDate}</div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default ListStaffSubmission1