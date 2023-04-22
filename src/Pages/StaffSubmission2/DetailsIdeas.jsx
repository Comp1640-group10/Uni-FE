import React, { useState, useEffect } from "react";
import "./StaffSubmission.css";
import {
    BsFillHandThumbsUpFill,
    BsFillHandThumbsDownFill
} from "react-icons/bs";
import axios from "axios";

const ListofIdeas2 = () => {
    const [idea, setIdea] = useState([])
    useEffect(() => {
        axios.get('https://unibackend.azurewebsites.net/api/idea')
            .then((getIdea) => {
                setIdea(getIdea.idea)
            })
    })



    return (
        <div className="">
            <div>
                {/* <div className="name">
                    <div className="Titile_name">{this.props.name}</div>
                </div> */}
                {idea && idea.length ? '' : 'No Item...'}
                {idea.map((data) => (
                    <div className='icons' >
                        <strong key={data.id}>Name: {data.name}</strong>
                        <div className='deadline_1'>Deadline_1: {data.closureDate}</div>
                        <div className='deadline_2'>Deadline_2: {data.finalClosureDate}</div>
                        <div className="like"><button className='btn-like'> <BsFillHandThumbsUpFill /></button></div>
                        <div className="dislike"><button className='btn-dislike'><BsFillHandThumbsDownFill /></button></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListofIdeas2