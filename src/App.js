import React from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Department from './pages/Department';
import Management from './pages/Management';
import StaffSubmission from './pages/StaffSubmission';
import Role from './pages/Role'
import Submission from './pages/Submission';
import Sidebar from "./components/Sidebar";
import Statistics from './pages/Statistics'
import NewCategory from "./pages/NewCategory";
import NewDepartment from "./pages/NewDepartment";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/department" element={<Department />} />
          <Route path="/management" element={<Management />} />
          <Route path="/staffSubmission" element={<StaffSubmission />} />
          <Route path="/submission" element={< Submission />} />
          <Route path="/role" element={<Role />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/newCategory" element={<NewCategory />} />
          <Route path="/newDepartment" element={<NewDepartment />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
