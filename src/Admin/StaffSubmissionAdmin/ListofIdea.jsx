import React from "react";
import "./StaffSubmissionAdmin.css";
import { NavLink } from "react-router-dom";

const ListofIdea = () => {
    return (
        <div>
            <NavLink to='/staffsubmission'>Call back</NavLink>
            <h1>List of Ideas</h1>
            <div>
                <div className="name">
                    <div className="Titile_name">{this.props.name}</div>
                </div>
            </div>
        </div>
    );
};

export default ListofIdea;