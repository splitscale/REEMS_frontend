import { useState } from "react";
import Profile from "./Profile";
import SignOut from "./SignOut";
import Notification from "./Notification";
import Link from "next/link";

export default function NavBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <div className="flex flex-row justify-center bg-gray-800">
      <div className="flex items-center">
        <img
          className="w-20 h-16 pl-2 mx-1 my-2"
          src="logo-2.png"
          alt="logo"
        />
      </div>

      <Link className="flex items-center no-underline" href={"/home"}>
        <img
          className="w-10 h-5 pl-2 ml-16 my-2 bg-transparent"
          src="dashboard.png"
          alt="-dashboard"
        />

        <div className="text-white">
          Dashboard
        </div>
      </Link>

      <Link className="flex items-center no-underline" href={"/environmentalHazard"}>
        <img
          className="w-12 h-8 pl-2 ml-16 my-2 bg-transparent"
          src="eh-icon.png"
          alt="eh-icon"
        />

        <div className="text-white">
          Environmental Hazard
        </div>
      </Link>

      <Link className="flex items-center no-underline" href={"/energyConsumption"}>
        <img
          className="w-12 h-8 pl-2 ml-16 my-2 bg-transparent"
          src="ec-icon.png"
          alt="ec-icon"
        />

        <div className="text-white">
          Energy Consumption
        </div>
      </Link>

      <Link className="flex items-center no-underline" href={"/expense"}>
        <img
          className="w-12 h-8 pl-2 ml-16 my-2 bg-transparent"
          src="expense-icon.png"
          alt="expense-icon"
        />

        <div className="text-white">
          Expense
        </div>
      </Link>

      <Link className="flex items-center no-underline" href={"/tenantInformation"}>
        <img
          className="w-12 h-8 pl-2 ml-16 my-2 bg-transparent"
          src="ti-icon.png"
          alt="ti-icon"
        />

        <div className="text-white">
          Tenant Information
        </div>
      </Link>

      <div className="flex items-center ml-auto">
        <div className="relative">
          <button
            type="button"
            className="rounded-full bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white 
                      focus:ring-offset-2 focus:ring-offset-gray-800 text"
            aria-expanded={isNotificationOpen}
            aria-haspopup="true"
            onClick={handleNotification}
          >
            <i className="bi bi-bell"> Notification </i>
          </button>

          {isNotificationOpen && (
            <div
              className="text-sm text-center absolute right-0 z-10 py-4 mt-2 w-60 h-60 origin-top-right rounded-md bg-white py-1 
                            shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform translate-y-1"
              role="menu"
              aria-orientation="vertical"
            >
              <Notification />
            </div>
          )}
        </div>

        <div className="relative mx-8 mr-8">
          <button
            type="button"
            className="pl-2 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-white focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded={isProfileOpen}
            aria-haspopup="true"
            onClick={handleProfileClick}
          >
            <img
              className="h-8 w-8 rounded-full"
              src="user-icon.png"
              alt="User-img"
            />
          </button>

          {isProfileOpen && (
            <div
              className="text-lg text-center absolute right-0 z-10 mt-2 w-60 origin-top-right rounded-md bg-white py-1 shadow-lg
                         ring-1 ring-black ring-opacity-5 focus:outline-none transform translate-y-1"
              role="menu"
              aria-orientation="vertical"
            >
              <Profile />
              <SignOut />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
