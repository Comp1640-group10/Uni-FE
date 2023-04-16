import React, { useContext } from "react";
import "./StaffSubmission1";
import { Link, NavLink } from "react-router-dom";
import { FaInfoCircle } from 'react-icons/fa'
import { GlobalContext } from '../../Context/GlobalState';
// import axios from "axios";

function StaffSubmission1(props) {
    const { submission } = useContext(GlobalContext);
    console.log(submission)

    // const { show, setShow } = useState([]);
    // useEffect(() => {
    //     axios.get('https://unibackend.azurewebsites.net/api/topic')
    //         .then((getData) => [
    //             setShow(getData.data)
    //         ]);
    // });

    return (
        <div className="">
            <div className="topnav">
                <NavLink to={"/HomePageStaff1"}>Home</NavLink>
                <NavLink to={"/StaffSubmission1"}>Staff Submission</NavLink>
                <div className="edit-acc">
                    <p>Xin chào</p><a href="AccountStaff1">Nguyễn Văn A</a>
                    <Link to={"/login"}>Logout</Link>
                </div>
            </div>

            <div className="body-staffsubmission">
                <h1>Staff Submission</h1>
                {submission && submission.length ? '' : 'No Item...'}
                {submission.map((submission) => (
                    <div className='icons' >
                        <strong key={submission.id}>Name: {submission.topicName}</strong>
                        <div className='deadline_1'> <strong>Deadline_1: </strong>{submission.closureDate}</div>
                        <div className='deadline_2'> <strong>Deadline_2: </strong>{submission.finalClosureDate}</div>
                        <div className='icon-cate'>
                            <NavLink to={`/listOfIdeas/${submission.id}`}><span title="detail"><FaInfoCircle /></span></NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StaffSubmission1