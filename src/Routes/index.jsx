//Layouts

//Pages
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Categories/Category";
import Department from "../Pages/Departments/Department";
import Role from "../Pages/Role/Role";
import StaffSubmission from "../Pages/StaffSubmission/StaffSubmission";
import Statistics from "../Pages/Statistics/Statistics";
import Submission from "../Pages/Submission/Submission";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/category", component: Category },
  { path: "/login", component: Login },
  { path: "/department", component: Department },
  { path: "/role", component: Role },
  { path: "/staffsubmission", component: StaffSubmission },
  { path: "/statistics", component: Statistics },
  { path: "/submission", component: Submission },
];

export { publicRoutes }