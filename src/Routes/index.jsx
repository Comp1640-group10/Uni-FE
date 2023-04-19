//Layouts
import Navbar from "../Components/Layouts/NavbarStaff/Navbar/Navbar";
// Addmin
import AddCategories from "../Admin/CategoriesAdmin/AddCategories";
import Categories from "../Admin/CategoriesAdmin/Categories";
import EditCategories from "../Admin/CategoriesAdmin/EditCategories";
import Users from "../Admin/HomepageAdmin/Users";
import ViewUsers from "../Admin/HomepageAdmin/ViewUsers";
import AddUsers from "../Admin/HomepageAdmin/AddUsers";
import EditUsers from "../Admin/HomepageAdmin/EditUsers";
import AddDepartments from "../Admin/DepartmentsAdmin/AddDepartments";
import Departments from "../Admin/DepartmentsAdmin/Departments";
import EditDepartments from "../Admin/DepartmentsAdmin/EditDepartments";
import AddRoles from "../Admin/RoleAdmin/AddRoles";
import EditRoles from "../Admin/RoleAdmin/EditRoles";
import Roles from "../Admin/RoleAdmin/Roles";
import StaffSubmissionAdmin from "../Admin/StaffSubmissionAdmin/StaffSubmissionAdmin";
import ListofIdea from "../Admin/StaffSubmissionAdmin/ListofIdea";
import AddSubmissions from "../Admin/SubmissionAdmin/AddSubmissions";
import EditSubmissions from "../Admin/SubmissionAdmin/EditSubmissions";
import Submissions from "../Admin/SubmissionAdmin/Submissions";
//Pages
import User from "../Pages/Home/User";
import AddUser from "../Pages/Home/AddUser";
import EditUser from "../Pages/Home/EditUser";
import ViewUser from "../Pages/Home/ViewUser";
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
import StaffSubmission2 from "../Pages/StaffSubmission2/StaffSubmission";
import ListofIdeas from "../Pages/StaffSubmission2/ListofIdeas";
import NewStaffSubmission from "../Pages/StaffSubmission/NewStaffSubmission";
import StaffSubmission from "../Pages/StaffSubmission/StaffSubmission";
import ListStaffSubmission from "../Pages/StaffSubmission/ListStaffSubmission";
import DetailsStaffSubmission from "../Pages/StaffSubmission/DetailsStaffSubmission";
import ListofIdeas from "../Pages/StaffSubmission2/ListofIdeas";
import Submission from "../Pages/Submission/Submission";
import AddSubmission from "../Pages/Submission/AddSubmission";
import EditSubmission from "../Pages/Submission/EditSubmission";

// Staff Page 1
import HomePageStaff1 from "../StaffPages1/Home/HomePageStaff1";
import AccountStaff1 from "../StaffPages1/AccountStaff1/AccountStaff1";
import SetupAuthenticator from "../StaffPages1/AccountStaff1/SetupAuthenticator";
import ResetAuthenticator from "../StaffPages1/AccountStaff1/ResetAuthenticator";
import DeletePersonaldata from "../StaffPages1/AccountStaff1/ResetAuthenticator";
import StaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/StaffSubmission1";
import DetailsStaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/DetailsStaffSubmission1";
import ListStaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/ListStaffSubmission1";

// Staff Page 2
import HomePageStaff from "../StaffPages2/Home/HomePageStaff";
import AccountInfo from "../StaffPages2/AccountInfo/AccountInfo";
import SetupAuthenticator2 from "../StaffPages2/AccountInfo/SetupAuthenticator2";
import ResetAuthenticator2 from "../StaffPages2/AccountInfo/ResetAuthenticator2";
import DeletePersonaldata2 from "../StaffPages2/AccountInfo/DeletePersonaldata2";
import StaffSubmissionPage from "../StaffPages2/StaffSubmissionPage2/StaffSubmissionPage";
import ListStaffSubmissionPage from "../StaffPages2/StaffSubmissionPage2/ListStaffSubmissionPage";
import DetailsStaffSubmissionPage from "../StaffPages2/StaffSubmissionPage2/DetailsStaffSubmissionPage";

const publicRoutes = [
  // Admin
  { path: "/categories", component: Categories },
  { path: "/addcategories", component: AddCategories },
  { path: "/editcategories", component: EditCategories },
  { path: "/users", component: Users },
  { path: "/viewusers", component: ViewUsers },
  { path: "/addusers", component: AddUsers },
  { path: "/editusers", component: EditUsers },
  { path: "/adddepartments", component: AddDepartments },
  { path: "/departments", component: Departments },
  { path: "/editdepartments", component: EditDepartments },
  { path: "/addroles", component: AddRoles },
  { path: "/editroles", component: EditRoles },
  { path: "/roles", component: Roles },
  { path: "/staffsubmissionadmin", component: StaffSubmissionAdmin },
  { path: "/listofidea", component: ListofIdea },
  { path: "/addsubmissions", component: AddSubmissions },
  { path: "/editsubmissions", component: EditSubmissions },
  { path: "/submissions", component: Submissions },
  // Pages
  { path: "/", component: Home },
  { path: "/adduser", component: AddUser },
  { path: "/edituser", component: EditUser },
  { path: "/viewuser", component: ViewUser },
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
  { path: "/liststaffsubmission", component: ListStaffSubmission },
  { path: "/newstaffsubmission", component: NewStaffSubmission },
  { path: "/detailsstaffsubmission", component: DetailsStaffSubmission },
  { path: "/listOfIdeas/:id", component: ListofIdeas },
  { path: "/submission", component: Submission },
  { path: "/addSubmission", component: AddSubmission },
  { path: "/editSubmission/:id", component: EditSubmission },

  { path: "/addsubmission", component: AddSubmission },
  { path: "/editsubmission", component: EditSubmission },
  { path: "/listofideas", component: ListofIdeas },
  { path: "/staffsubmission", component: StaffSubmission },
  // Staff Page 1
  { path: "/homepagestaff1", component: HomePageStaff1, Layouts: Navbar },
  { path: "/staffsubmission1", component: StaffSubmission1, Layouts: Navbar },
  { path: "/accountstaff1", component: AccountStaff1, Layouts: Navbar },
  { path: "/setupauthenticator", component: SetupAuthenticator },
  { path: "/resetauthenticator", component: ResetAuthenticator },
  { path: "/deletepersonaldata", component: DeletePersonaldata },
  { path: "/liststaffsubmission1", component: ListStaffSubmission1, Layouts: Navbar },
  { path: "/detailsstaffsubmission1", component: DetailsStaffSubmission1 },
  // Staff Page 2
  { path: "/homepagestaff", component: HomePageStaff },
  { path: "/accountinfo", component: AccountInfo },
  { path: "/setupauthenticator2", component: SetupAuthenticator2 },
  { path: "/resetauthenticator2", component: ResetAuthenticator2 },
  { path: "/deletepersonaldata2", component: DeletePersonaldata2 },
  { path: "/staffsubmissionpage1", component: StaffSubmissionPage },
  { path: "/liststaffsubmissionpage", component: ListStaffSubmissionPage },
  {
    path: "/detailsstaffsubmissionpage",
    component: DetailsStaffSubmissionPage,
  },
];

export { publicRoutes };

