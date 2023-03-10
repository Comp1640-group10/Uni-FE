//Layouts

//Pages
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Categories/Category";
import Department from "../Pages/Departments/Department";
import Management from "../Pages/Management/Management";
import NewCategory from "../Pages/Categories/NewCategory";
import NewDepartment from "../Pages/Departments/NewDepartment";
import Role from "../Pages/Role/Role";
import StaffSubmission from "../Pages/StaffSubmission/StaffSubmission";
import Statistics from "../Pages/Statistics/Statistics";
import Submission from "../Pages/Submission/Submission";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/category", component: Category },
  { path: "/newcategory", component: NewCategory },
  { path: "/login", component: Login },
  { path: "/department", component: Department },
  { path: "/newdepartment", component: NewDepartment },
  { path: "/role", component: Role },
  { path: "/staffsubmission", component: StaffSubmission },
  { path: "/management", component: Management },
  { path: "/statistics", component: Statistics },
  { path: "/submission", component: Submission },
];

export {publicRoutes}