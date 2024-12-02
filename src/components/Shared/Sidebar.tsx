import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DashboardLinks } from "../constants/Navigation";
import classNames from "classnames";
import { IoCardOutline } from "react-icons/io5";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const linkClass = " px-5 py-2.5 hover:bg-blue-50 active:bg-blue-200";

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {

  return (
    <div className="flex h-screen fixed z-30 text-white">
      <div className={`fixed inset-y-0 left-0 z-30 w-52 bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0`} >
        <div className="h-full text-gray-300">
          
            <div className="flex items-center justify-center mt-4 mb-10 gap-2">
              <IoCardOutline size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-black">BankDash</h1>
            </div>
          

          <div className="flex-1">
            <div className="my-4">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  {DashboardLinks.map((item) => (
                    <SidebarLinks
                      key={item.key}
                      item={{ ...item, icon: <item.icon size={22} /> }}
                      toggleSidebar={toggleSidebar}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

type sideBarlinksprops = {
  item: {
    label: string;
    path: string;
    icon: React.ReactElement;
  };
  toggleSidebar: () => void;
};
function SidebarLinks({ item, toggleSidebar }: sideBarlinksprops) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? " text-blue-600 border-l-4 border-blue-600 font-semibold"
          : "text-neutral-400",
        linkClass
      )}
      onClick={toggleSidebar}
    >
      <div className="flex items-center gap-4">
        {item.icon}
        <p>{item.label}</p>
      </div>
      
    </Link>
  );
}

export default Sidebar;
