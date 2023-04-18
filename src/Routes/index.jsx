//Layouts

//Pages
import Home from "../Pages/Home/User";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Categories/Category";
import Department from "../Pages/Departments/Department";
import Role from "../Pages/Role/Role";
import StaffSubmission from "../Pages/StaffSubmission2/StaffSubmission";
import ListStaffSubmission from "../Pages/StaffSubmission/ListStaffSubmission";
import DetailsStaffSubmission from "../Pages/StaffSubmission/DetailsStaffSubmission";

import ListofIdeas from "../Pages/StaffSubmission2/ListofIdeas";
=======
import Statistics from "../Pages/Statistics/Statistics";

import Submission from "../Pages/Submission/Submission";
// Staff Page 1
import HomePageStaff1 from "../StaffPages1/Home/HomePageStaff1";
import AccountStaff1 from "../StaffPages1/AccountStaff1/AccountStaff1";
import ChangePasswordStaff from "../StaffPages1/AccountStaff1/ChangePasswordStaff";
import EmailStaff from "../StaffPages1/AccountStaff1/EmailStaff";
import PersonalDataStaff from "../StaffPages1/AccountStaff1/PersonalDataStaff";
import ProfileStaff from "../StaffPages1/AccountStaff1/ProfileStaff";
import TwoFactorAuthenticationStaff from "../StaffPages1/AccountStaff1/TwoFactorAuthenticationStaff";
import StaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/StaffSubmission1";
import DetailsStaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/DetailsStaffSubmission1";
import ListStaffSubmission1 from "../StaffPages1/StaffSubmissionPage1/ListStaffSubmission1";
// Staff Page 2
import HomePageStaff from "../StaffPages2/Home/HomePageStaff";
import Profile from "../StaffPages2/AccountInfo/Profile";
import ChangePassword from "../StaffPages2/AccountInfo/ChangePassword";
import Email from "../StaffPages2/AccountInfo/Email";
import TwoFactorAuthentication from "../StaffPages2/AccountInfo/TwoFactorAuthentication";
import PersonalData from "../StaffPages2/AccountInfo/PersonalData";
import StaffSubmissionPage from "../StaffPages2/StaffSubmissionPage2/StaffSubmissionPage";
import ListStaffSubmissionPage from "../StaffPages2/StaffSubmissionPage2/ListStaffSubmissionPage";
import DetailsStaffSubmissionPage from "../StaffPages1/StaffSubmissionPage1/DetailsStaffSubmission1";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/category", component: Category },
  { path: "/login", component: Login },
  { path: "/department", component: Department },
  { path: "/role", component: Role },
  { path: "/staffsubmission", component: StaffSubmission },
  { path: "/liststaffsubmission", component: ListStaffSubmission },
  { path: "/detailsstaffsubmission", component: DetailsStaffSubmission },

  { path: "/listOfIdeas/:id", component: ListofIdeas },
=======
  { path: "/statistics", component: Statistics },

  { path: "/submission", component: Submission },
  // Staff Page 1
  { path: "/homepagestaff1", component: HomePageStaff1 },
  { path: "/staffsubmission1", component: StaffSubmission1 },
  { path: "/liststaffsubmission1", component: ListStaffSubmission1 },
  { path: "/detailsstaffsubmission1", component: DetailsStaffSubmission1 },
  { path: "/accountstaff1", component: AccountStaff1 },
  { path: "/changepasswordstaff", component: ChangePasswordStaff },
  { path: "/emailstaff", component: EmailStaff },
  { path: "/personaldatastaff", component: PersonalDataStaff },
  { path: "/profilestaff", component: ProfileStaff },
  {
    path: "/twofactorauthenticationstaff",
    component: TwoFactorAuthenticationStaff,
  },
  // Staff Page 2
  { path: "/homepagestaff", component: HomePageStaff },
  { path: "/profile", component: Profile },
  { path: "/changepassword", component: ChangePassword },
  { path: "/email", component: Email },
  { path: "/twofactorauthentication", component: TwoFactorAuthentication },
  { path: "/personaldata", component: PersonalData },
  { path: "/staffsubmissionpage1", component: StaffSubmissionPage },
  { path: "/liststaffsubmissionpage", component: ListStaffSubmissionPage },
  {
    path: "/detailsstaffsubmissionpage",
    component: DetailsStaffSubmissionPage,
  },
];

export { publicRoutes };
