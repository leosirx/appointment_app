import {  Routes, Route, Outlet } from "react-router-dom";
import DashboardSlideBar from "../components/specialist/DashboarSlideBar";

import Abailability from "../components/specialist/views/Abailability";
import Appointments from "../components/specialist/views/Appointments";
import Profile from "../screens/ProfileScreen";
import FormContainer from '../components/FormContainer';

export default function SpecialistScreen() {
  return (
    <>
        <FormContainer>
          <div className="grid grid-flow-col auto-cols-max">
            <div className="mt-14">
              <DashboardSlideBar />
            </div>
            <div className="ml-10 mt-20" >
            <Routes>
              <Route path="/abailability" element={<Abailability />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            </div>
          </div>
        </FormContainer>  
    </>
  );
}