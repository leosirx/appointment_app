import {  Routes, Route, Outlet } from "react-router-dom";
import DashboardSlideBar from "../components/specialist/DashboarSlideBar";

import Disponibilidad from "../components/specialist/views/Disponibilidad";
import Citas from "../components/specialist/views/Citas";
import Profile from "../components/specialist/views/profile/Profile";

export default function SpecialistScreen() {
  return (
    <>
        <DashboardSlideBar />
        
          <Routes>
          <Route path="/disponibilidad" element={<Disponibilidad />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/profile" element={<Profile />} />
          </Routes>
    
          <Outlet /> 
    </>
  );
}