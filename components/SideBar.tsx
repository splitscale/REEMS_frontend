import Link from "next/link";
import Notification from "./Notification";

export default function SideBar() {

  return (
    <div style={{
      backgroundImage: `url('/nav-bg.png')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "100%",
      width: "100%",
    }} >
      <div className="fixed flex flex-col top-0 left-0 w-80 bg-white h-full"
        style={{
          backgroundImage: 'url("/nav-bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}>
        <div className="flex items-center justify-start h-20 border-b" >
          <img
            className="w-20 h-16 pl-2 mx-1"
            src="logo-2.png"
            alt="logo" />
          <span className="text-2xl" style={{ fontFamily: 'cursive' }}>Reems</span>
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow">
          <ul className="flex flex-col py-5 space-y-1">

            <li className="mb-4">
              <Link href="/home" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 no-underline">
                <span className="inline-flex justify-center items-center ml-1">
                  <img
                    className="h-7 pl-2 bg-transparent"
                    src="dashboard-icon.png"
                    alt="dashboard-icon"
                  />
                </span>
                <span className="ml-1 text-lg tracking-wide truncate">Dashboard</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link href="/environmentalHazard" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 no-underline">
                <span className="inline-flex justify-center items-center ml-1">
                  <img
                    className="h-8 pl-2 bg-transparent"
                    src="eh-icon.png"
                    alt="eh-icon"
                  />
                </span>
                <span className="ml-1 text-lg tracking-wide truncate">Hazards</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link href="/expense" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 no-underline">
                <span className="inline-flex justify-center items-center ml-1">
                  <img
                    className="h-8 pl-2 bg-transparent"
                    src="expense-icon.png"
                    alt="expense-icon"
                  />
                </span>
                <span className="ml-1 text-lg tracking-wide truncate">Expenses</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link href="tenantInformation" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 no-underline">
                <span className="inline-flex justify-center items-center ml-1">
                  <img
                    className="h-8 pl-2 bg-transparent"
                    src="ti-icon.png"
                    alt="ti-icon"
                  />
                </span>
                <span className="ml-1 text-lg tracking-wide truncate">Tenants</span>
              </Link>
            </li>

            <li className="mb-4">
              <Link href="propertyInformation" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 no-underline">
                <span className="inline-flex justify-center items-center ml-1">
                  <img
                    className="h-8 pl-2 bg-transparent"
                    src="property-icon.png"
                    alt="property-icon"
                  />
                </span>
                <span className="ml-1 text-lg tracking-wide truncate">Properties</span>
              </Link>
            </li>

            <li className="mb-4">
              <button className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600
                                 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 no-underline">
                <span className="inline-flex justify-center items-center ml-1">
                  <img
                    className="h-8 pl-1 bg-transparent"
                    src="notif-icon.png"
                    alt="notif-icon"
                  />
                </span>
                <span className="ml-1 text-lg tracking-wide truncate">Notification</span>
              </button>
            </li>

            <li className="mb-4">
              <Link href="/settings" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 
                                                text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 no-underline">
                <span className="inline-flex justify-center items-center ml-1">
                  <img
                    className="h-6 pl-2 bg-transparent"
                    src="setting-icon.png"
                    alt="setting-icon"
                  />
                </span>
                <span className="ml-1 text-lg tracking-wide truncate">Settings</span>
              </Link>
            </li>

            <li className="mb-4">
              <span className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600
                               hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 no-underline">
                <span className="inline-flex justify-center items-center ml-1">
                  <img
                    className="h-8 pl-2 bg-transparent"
                    src="profile-icon.png"
                    alt="profile-icon"
                  />
                </span>
                <span className="ml-1 text-lg tracking-wide truncate">Profile</span>
              </span>
            </li>
            <li>

            </li>
          </ul>
        </div>
      </div>
    </div >
  )
}