import Link from "next/link";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import SignOut from "./SignOut";
import Profile from "./Profile";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <Nav className="bg-gray-800 flex justify-between">
      <div className="flex justify-start">
        <img className="w-20 h-16 pl-2 mx-1 my-2" src="logo.png" alt="logo" />
        <Link href="/home" className="text-white rounded-md pl-8 my-auto text-2xl font-medium" aria-current="page"> Home </Link>
      </div>

      <div className="flex items-center ml-auto">
        <button
          type="button"
          className="rounded-full bg-gray-800 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor">
            <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        <div className="relative mx-8 mr-8">
          <button
            type="button"
            className="pl-2 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-white focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={handleProfileClick}
          >
            <img className="h-8 w-8 rounded-full" src="user-icon.png" alt="User-img" />
          </button>

          {isOpen && (
            <div className="text-lg text-center absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical">
              <Profile/>
              <SignOut />
            </div>
          )}
        </div>
      </div>
    </Nav>
  );
}
