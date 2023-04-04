//Layouts

//Pages
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Categories/Category";
import Department from "../Pages/Departments/Department";
import Role from "../Pages/Role/Role";
import StaffSubmission from "../Pages/StaffSubmission/StaffSubmission";
import ListofIdeas from "../Pages/StaffSubmission/ListofIdeas";
import Statistics from "../Pages/Statistics/Statistics";
import Submission from "../Pages/Submission/Submission";
import AddSubmission from "../Pages/Submission/AddSubmission";
import EditSubmission from "../Pages/Submission/EditSubmission";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/category", component: Category },
  { path: "/login", component: Login },
  { path: "/department", component: Department },
  { path: "/role", component: Role },
  { path: "/staffsubmission", component: StaffSubmission },
  { path: "/listOfIdeas", component: ListofIdeas },
  { path: "/statistics", component: Statistics },
  { path: "/submission", component: Submission },
  { path: "/addsubmission", component: AddSubmission },
  { path: "/editsubmission", component: EditSubmission },
];

export { publicRoutes }