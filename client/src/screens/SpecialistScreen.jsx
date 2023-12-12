import {  Routes, Route, Outlet } from "react-router-dom";
import DashboardSlideBar from "../components/specialist/DashboarSlideBar";

import Disponibilidad from "../components/specialist/views/Disponibilidad";
import Citas from "../components/specialist/views/Citas";
import Profile from "../components/specialist/views/Profile";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import esLocale from 'date-fns/locale/es';

export default function SpecialistScreen() {
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>

        <DashboardSlideBar />
          <Routes>
          <Route path="/disponibilidad" element={<Disponibilidad />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/profile" element={<Profile />} />
          </Routes>
    
          <Outlet /> 
      </MuiPickersUtilsProvider>
    </>
  );
}