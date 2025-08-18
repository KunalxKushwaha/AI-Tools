// import React from 'react'
// import { Protect, useUser } from '@clerk/clerk-react'
// import { Eraser, FileText, Hash,Image, House, Scissors, SquarePen, Icon, Users, LogOut } from 'lucide-react'
// import { NavLink } from 'react-router-dom'
// import { useClerk } from '@clerk/clerk-react'


// const navItems = [
//   {to: '/ai', label: 'Dashboard', Icon: House},
//   {to: '/ai/write-article', label: 'Write Article', Icon: SquarePen},
//   {to: '/ai/blog-titles', label: 'Blog Titles', Icon: Hash},
//   {to: '/ai/generate-images', label: 'Geneate Images', Icon: Image},
//   {to: '/ai/remove-background', label: 'Remove Background', Icon: Eraser},
//   {to: '/ai/remove-object', label: 'Remove Object', Icon: Scissors},
//   {to: '/ai/review-resume', label: 'Review Resume', Icon: FileText},
//   {to: '/ai/community', label: 'Community', Icon: Users},



// ]

// const Sidebar = ({sidebar, setSidebar}) => {
//     const {user} = useUser()
//     const {signOut, openUserProfile} = useClerk()
//   return (
//     <div className= {`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max:sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>

//         <div className='my-7 w-full'>

//             <img src= {user.imageUrl} alt="User Avatar" className='w-14 rounded-full mx-auto'/>
//             <h1 className='mt-1 text-center'>{user.fullName}</h1>
//             <div className='px-6 mt-5 text-sm text-gray-600 font-medium'>
//               {navItems.map(({to ,label,Icon}) => (

//              <NavLink key={to} to={to} end={to=== '/ai'} onClick={() => setSidebar(false)} className={({isActive}) => `flex items-center gap-3 px-3.5 py-2.5 ${isActive ? 'bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white' : ''}`}>
                 
//                  {({isActive}) => (
//                     <>
//                       <Icon className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
//                       {label}

                      
//                     </>
//                  )}

//              </NavLink>                 

//               ))}
//             </div>

//         </div>

//         <div className='w-full px-7 p-4 border-t border-gray-200 items-center justify-between flex'>

//           <div onClick ={openUserProfile} className='flex gap-2 items-center cursor-pointer'>

//             <img src={user.imageUrl} alt="" className='w-8 rounded-full' />

//             <div>
//               <h1 className='text-sm font-medium'>{user.fullName}</h1>
//               <p className='text-xs text-gray-500'> <Protect plan = 'premium' fallback = 'Free'>Premium</Protect>Plan </p>
//             </div>
            
//           </div>
//           <LogOut onClick={signOut} className='w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer'/>

//         </div>
      
//     </div>
//   )
// }

// export default Sidebar

import React from "react";
import { Protect, useUser, useClerk } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  Image,
  House,
  Scissors,
  SquarePen,
  Users,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-images", label: "Generate Images", Icon: Image },
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-object", label: "Remove Object", Icon: Scissors },
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: Users },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-64 bg-white/90 backdrop-blur-lg border-r border-gray-200 
        flex flex-col justify-between shadow-sm 
        max-sm:fixed max-sm:top-16 max-sm:bottom-0 max-sm:z-30 
        ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"} 
        transition-transform duration-300 ease-in-out`}
    >
      {/* Top Section */}
      <div className="my-6 w-full px-4">
        <div className="flex flex-col items-center">
          <img
            src={user.imageUrl}
            alt="User Avatar"
            className="w-16 h-16 rounded-full shadow-md border border-gray-200"
          />
          <h1 className="mt-3 text-base font-semibold text-gray-800">
            {user.fullName}
          </h1>
        </div>

        {/* Nav Items */}
        <div className="mt-8 space-y-1">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 
                 ${
                   isActive
                     ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white shadow-md"
                     : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                 }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom User Profile + Logout */}
      <div className="w-full px-5 py-4 border-t border-gray-200 flex items-center justify-between bg-gray-50">
        {/* Profile */}
        <div
          onClick={openUserProfile}
          className="flex gap-3 items-center cursor-pointer group"
        >
          <img
            src={user.imageUrl}
            alt="profile"
            className="w-9 h-9 rounded-full border border-gray-200"
          />
          <div>
            <h1 className="text-sm font-semibold text-gray-800">
              {user.fullName}
            </h1>
            <p className="text-xs text-gray-500 group-hover:text-gray-700 transition">
              <Protect plan="premium" fallback="Free">
                Premium
              </Protect>{" "}
              Plan
            </p>
          </div>
        </div>

        {/* Logout */}
        <LogOut
          onClick={signOut}
          className="w-5 h-5 text-gray-400 hover:text-red-500 transition cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
