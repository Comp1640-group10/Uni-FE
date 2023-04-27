import React from "react";

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
        </div>
    )
}

export default HomePageStaff1