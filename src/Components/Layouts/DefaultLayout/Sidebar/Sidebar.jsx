import React, { useState } from "react";
import {
  FaHome,
  FaVoteYea,
  FaBars,
  FaSitemap,
  FaUserCog,
  FaChartLine,
  FaClipboardList,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/category",
      name: "category",
      icon: <FaThList />,
    },
    {
      path: "/Department",
      name: "department",
      icon: <FaSitemap />,
    },

    {
      path: "/Role",
      name: "role",
      icon: <FaUserCog />,
    },
    {
      path: "/StaffSubmission",
      name: "Staff Submission",
      icon: <FaClipboardList />,
    },
    {
      path: "/Statistics",
      name: "Statistics",
      icon: <FaChartLine />,
    },
    {
      path: "/submission",
      name: "submission",
      icon: <FaVoteYea />,
    },
  ];
  return (
    <div style={{ height: "1080px" }}>
      <div style={{ width: isOpen ? "300px" : "50px", height:'100%' }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo{" "}
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Sidebar;
