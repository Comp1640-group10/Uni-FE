//Layouts

//Pages
import User from "../Pages/Home/user";
import AddUser from "../Pages/Home/AddUser";
import EditUser from "../Pages/Home/EditUser";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Categories/Category";
import AddCategory from "../Pages/Categories/AddCategory";
import EditCategory from "../Pages/Categories/EditCategory";
import Department from "../Pages/Departments/Department";
import AddDepartment from "../Pages/Departments/AddDepartment";
import EditDepartment from "../Pages/Departments/EditDepartment";
import Role from "../Pages/Role/Role";
import AddRole from "../Pages/Role/AddRole";
import EditRole from "../Pages/Role/EditRole";
import StaffSubmission from "../Pages/StaffSubmission2/StaffSubmission";
import ListofIdeas from "../Pages/StaffSubmission2/ListofIdeas";
import Statistics from "../Pages/Statistics/Statistics";
import Submission from "../Pages/Submission/Submission";
import AddSubmission from "../Pages/Submission/AddSubmission";
import EditSubmission from "../Pages/Submission/EditSubmission";



const publicRoutes = [

  { path: "/", component: User },
  { path: "/addUser", component: AddUser },
  { path: "/editUser/:id", component: EditUser },
  { path: "/category", component: Category },
  { path: "/addCategory", component: AddCategory },
  { path: "/editCategory/:id", component: EditCategory },
  { path: "/login", component: Login },
  { path: "/department", component: Department },
  { path: "/addDepartment", component: AddDepartment },
  { path: "/editDepartment/:id", component: EditDepartment },
  { path: "/role", component: Role },
  { path: "/addRole", component: AddRole },
  { path: "/editRole/:id", component: EditRole },
  { path: "/staffSubmission", component: StaffSubmission },
  { path: "/listOfIdeas/:id", component: ListofIdeas },
  { path: "/statistics", component: Statistics },
  { path: "/submission", component: Submission },
  { path: "/addSubmission", component: AddSubmission },
  { path: "/editSubmission/:id", component: EditSubmission },
];

export { publicRoutes }