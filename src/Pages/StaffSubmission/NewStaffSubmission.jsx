import React from "react";
import { FormGroup, Form } from "reactstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const NewStaffSubmission = () => {
    return (
        <div className="">
            <div className="header">
                <h1>Add Idea</h1>
            </div>

            <div className="input-addidea">
                <FormGroup>
                    <Form>
                        <div className="input">
                            <h2>Title</h2>
                            <input type="text" />
                        </div>

                        <div className="input">
                            <h2>Brief</h2>
                            <input type="text" />
                        </div>

                        <div className="input">
                            <h2>Contents</h2>
                            <input type="text" />
                        </div>

                        <div className="file">
                            <h2>File</h2>
                            <input type="file" name="" id="" />
                        </div>

                        <div className="checkbox">
                            <input type="checkbox" name="" id="" />Term ABC
                        </div>

                        <div className="dropdown">
                            <select name="" id="">
                                <option value="">ABC</option>
                                <option value="">ABsadC</option>
                                <option value="">ABCsad</option>
                            </select>
                        </div>

                        <div className="button">
                            <button type="submit" className="btn-create">Create</button>
                            <button><Link to={"/StaffSubmission"} className="btn-callback">Back to list</Link></button>
                        </div>
                    </Form>
                </FormGroup>
            </div>
        </div>
    );
};

export default NewStaffSubmission