import React from "react";
import "./HomePageStaff1.css";
import {
    BsReverseLayoutTextSidebarReverse,
    BsList,
    BsPerson
} from "react-icons/bs";

import { Link } from "react-router-dom";

const HomePageStaff1 = () => {
    const homepagestaff1item = [
        {
            name: 'Nguyễn Văn A',
            age: '22 tuổi',
            phone: '09012345678',
            createdate: 'Ngày gia nhập: 2/4/2023',
        }

    ]
    return (
        <div className="">
            {
                homepagestaff1item.map((homepagestaff1item, index) => (
                    <div className="info-table">
                        <h3>{homepagestaff1item.name}</h3>
                        <p><strong>{homepagestaff1item.age}</strong></p>
                        <p><strong>{homepagestaff1item.phone}</strong></p>
                        <span>{homepagestaff1item.createdate}</span>
                    </div>
                ))
            }

            <div className="bodybox">
                <div>
                    <h2>Staff Submission</h2>
                    <button>
                        <Link to={"/StaffSubmission1"} className="btn-link"><BsReverseLayoutTextSidebarReverse /></Link>
                    </button>
                </div>
                <div>
                    <h2>List Staff Submission</h2>
                    <button>
                        <Link to={"/liststaffsubmission1"} className="btn-link"><BsList /></Link>
                    </button>
                </div>
                <div>
                    <h2>Account</h2>
                    <span><button>
                        <Link to={"/accountstaff1"} className="btn-link"><BsPerson /></Link>
                    </button></span>
                </div>

            </div>
        </div>
    )
}

export default HomePageStaff1