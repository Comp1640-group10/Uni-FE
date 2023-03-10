import React, { useState } from "react";
import {
  FaHome,
  FaBars,
  FaUserCog,
  FaThList,
  FaUsersCog,
  FaClipboardList,
  FaVoteYea,
  FaSitemap,
  FaChartLine,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

const Sidebar = ({ children }) => {
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
      path: "/Management",
      name: "management",
      icon: <FaUsersCog />,
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
      path: "/Submission",
      name: "Submission",
      icon: <FaVoteYea />,
    },
  ];
  return (
    <div>
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
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
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
