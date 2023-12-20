import "flowbite";
import { Link } from "react-router-dom";
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';


export default function DashboarSlideBar() {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="appointments" icon={HiViewBoards}>
            Appointments
          </Sidebar.Item>
          <Sidebar.Item href="abailability" icon={HiInbox}>
            Abailability
          </Sidebar.Item>
          <Sidebar.Item href="profile" icon={HiUser}>
            Profile
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        
      </Sidebar.Items>
    </Sidebar>
  );
}
