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
import NewRole from "../Pages/Role/NewRole";
import StaffSubmission from "../Pages/StaffSubmission/StaffSubmission";
import ListStaffSubmission from "../Pages/StaffSubmission/ListStaffSubmission";
import DetailsStaffSubmission from "../Pages/StaffSubmission/DetailsStaffSubmission";
import Statistics from "../Pages/Statistics/Statistics";
import Submission from "../Pages/Submission/Submission";
// Staff Page 1
import HomePageStaff1 from "../StaffPages1/Home/HomePageStaff1";
import Category1 from "../StaffPages1/Category/Category1";
import CreateCategory from "../StaffPages1/Category/CreateCategory";
import Department1 from "../StaffPages1/Department/Department1";
import CreateDepartment from "../StaffPages1/Department/CreateDepartment";
import Role1 from "../StaffPages1/Role/Role1";
import CreateRole from "../StaffPages1/Role/CreateRole";
import StaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/StaffSubmission1";
import ListStaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/ListStaffSubmission1";
import DetailsStaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/DetailsStaffSubmission1";
import Statistics1 from "../StaffPages1/Statistics/Statistics1";
import Submission1 from "../StaffPages1/Submission/Submission1";
import CreateSubmission from "../StaffPages1/Submission/CreateSubmission";
import User from "../StaffPages1/User/User";
import EditUser from "../StaffPages1/User/EditUser";
import DeleteUser from "../StaffPages1/User/User";
import AssignRole from "../StaffPages1/User/AssignRole";
import AccountStaff1 from "../StaffPages1/AccountStaff1/AccountStaff1"
import ChangePasswordStaff from "../StaffPages1/AccountStaff1/ChangePasswordStaff";
import EmailStaff from "../StaffPages1/AccountStaff1/EmailStaff";
import PersonalDataStaff from "../StaffPages1/AccountStaff1/PersonalDataStaff";
import ProfileStaff from "../StaffPages1/AccountStaff1/ProfileStaff";
import TwoFactorAuthenticationStaff from "../StaffPages1/AccountStaff1/TwoFactorAuthenticationStaff";
// Staff Page 2
import HomePageStaff from "../StaffPages2/Home/HomePageStaff";
import Profile from "../StaffPages2/AccountInfo/Profile";
import ChangePassword from "../StaffPages2/AccountInfo/ChangePassword";
import Email from "../StaffPages2/AccountInfo/Email";
import TwoFactorAuthentication from "../StaffPages2/AccountInfo/TwoFactorAuthentication";
import PersonalData from "../StaffPages2/AccountInfo/PersonalData";
import StaffSubmissionPage2 from "../StaffPages2/StaffSubmissionPage2/StaffSubmissionPage";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/category", component: Category },
  { path: "/newcategory", component: NewCategory },
  { path: "/login", component: Login },
  { path: "/department", component: Department },
  { path: "/newdepartment", component: NewDepartment },
  { path: "/role", component: Role },
  { path: "/newrole", component: NewRole },
  { path: "/staffsubmission", component: StaffSubmission },
  { path: "/liststaffsubmission", component: ListStaffSubmission },
  { path: "/detailsstaffsubmission", component: DetailsStaffSubmission },
  { path: "/management", component: Management },
  { path: "/statistics", component: Statistics },
  { path: "/submission", component: Submission },
  // Staff Page 1
  { path: "/homepagestaff1", component: HomePageStaff1 },
  { path: "/category1", component: Category1 },
  { path: "/createcategory", component: CreateCategory },
  { path: "/department1", component: Department1 },
  { path: "/createdepartment", component: CreateDepartment },
  { path: "/role1", component: Role1 },
  { path: "/createrole", component: CreateRole },
  { path: "/staffsubmission1", component: StaffSubmission1 },
  { path: "/liststaffsubmission1", component: ListStaffSubmission1 },
  { path: "/detailsstaffsubmission1", component: DetailsStaffSubmission1 },
  { path: "/statistics1", component: Statistics1 },
  { path: "/submission1", component: Submission1 },
  { path: "/createsubmission", component: CreateSubmission },
  { path: "/user", component: User },
  { path: "/edituser", component: EditUser },
  { path: "/deleteuser", component: DeleteUser },
  { path: "/assignrole", component: AssignRole },
  { path: "/accountstaff1", component: AccountStaff1 },
  { path: "/changepasswordstaff", component: ChangePasswordStaff },
  { path: "/emailstaff", component: EmailStaff },
  { path: "/personaldatastaff", component: PersonalDataStaff },
  { path: "/profilestaff", component: ProfileStaff },
  { path: "/twofactorauthenticationstaff", component: TwoFactorAuthenticationStaff },
  // Staff Page 2
  { path: "/homepagestaff", component: HomePageStaff },
  { path: "/profile", component: Profile },
  { path: "/changepassword", component: ChangePassword },
  { path: "/email", component: Email },
  { path: "/twofactorauthentication", component: TwoFactorAuthentication },
  { path: "/personaldata", component: PersonalData },
  { path: "/staffsubmissionpage1", component: StaffSubmissionPage2 },
];

export { publicRoutes }