import React from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Notifications from "./components/common/Notifications";
import DashboardOverview from "./components/common/DashboardOverview";
import UserProfile from "./components/common/UserProfile";
import AdminDashboard from "./components/Admin/AdminDashboard";
import NurseDashboard from "./components/Doctors_Nurses/NurseDashboard";
import DoctorDashboard from "./components/Doctors_Nurses/DoctorDashboard";
import Signup from "./signup";
import Login from './login';
import CreateAdminUserForm from "./components/CreateAdminUserForm";
import AdminSignup from "./components/Admin/AdminSignup";
import AdminLogin from "./components/Admin/AdminLogin";
import DoctorsNursesLogin from "./components/Doctors_Nurses/DoctorsNursesLogin";
import PatientManagement from "./components/Doctors_Nurses/PatientManagement";
import Admissions from "./components/Doctors_Nurses/Admissions";


const Rout = () => {
  return(
    <>
    <Routes>
    <Route path='/doctor' element={<DoctorDashboard />}></Route>
    <Route path='/nurse' element={<NurseDashboard />}></Route>
        <Route path='/' element={<DoctorsNursesLogin/>}></Route>
        <Route path='/components/Admin/AdminSignup' element={<AdminSignup />}></Route>
        <Route path='/components/Admin/AdminLogin' element = {<AdminLogin />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/components/common/NavBar' element={<NavBar />}></Route>
        <Route path='/components/common/Notifications' element={<Notifications />}></Route>
        <Route path='/components/common/UserProfile' element={<UserProfile />}></Route>
        <Route path='/components/common/DashboardOverview' element={<DashboardOverview />}></Route>
        <Route path='/components/Admin/AdminDashboard' element={<AdminDashboard />}></Route>
        <Route path='.components/CreateAdminUserForm' element= {<CreateAdminUserForm/>}></Route>
        <Route path='./login' element = {<Login />}></Route>
        <Route path='/components/Doctors_Nurses/PatientManagement' element={<PatientManagement />}></Route>
        <Route path='/components/Doctors_Nurses/Admissions' element={<Admissions />}></Route>
    </Routes>
    </>
  )
}

export default Rout;