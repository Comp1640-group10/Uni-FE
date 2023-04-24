import React from "react";
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import "./AccountStaff1.css";

const DeletePersonaldata = () => {
    return (
        <div className="">
            <div className="body-personal">
                <Link to={"/AccountStaff1"} className="backtoaccount">Back</Link>
                <h1>Delete Personal Data</h1>
                <>
                    {[
                        'warning',
                    ].map((variant) => (
                        <Alert key={variant} variant={variant}>
                            <p><strong>Deleting this data will permanently remove your account, and this cannot be recovered.</strong></p>
                        </Alert>
                    ))}
                </>
                <form action="" className="form-deletepersonal">
                    <input type="text" className="input-deletepersonal" />
                    <button className="btn-deletepersonal">Delete data and my account</button>
                </form>
            </div>
        </div>
    )
}

export default DeletePersonaldata