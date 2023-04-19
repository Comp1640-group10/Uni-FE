import axios from "axios";
import React, { useEffect, useState } from "react";
import './ViewUsers.scss'

function ViewUsers() {
    const [data, setData] = useState([])
    const getData = () => {
        axios.get('https://unibackend.azurewebsites.net/api/user')
            .then((getData) => {
                setData(getData.data)
            })

    }
    useEffect(() => {
        getData();
    })
    return (
        <div>
            {data.map((data) => (
                <div className="view">
                    <div className="fullName">fullName
                        <div>{data.fullName}</div>
                    </div>
                    <div className="password">password
                        <div>
                            {data.password}
                        </div>
                    </div>
                    <div className="role">role
                        <div>
                            {data.role}
                        </div>
                    </div>
                    <div className="department">department
                        <div>{data.department}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ViewUsers;