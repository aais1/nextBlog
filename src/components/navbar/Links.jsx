"use client"
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/constants/links";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Links = () => {
  const pathname = usePathname();
  const isAdmin = true; // You can replace this with your logic to determine if user is admin
  const isLoggedIn = true; // You can replace this with your logic to determine if user is logged in
  const [showMenu, setShowMenu] = useState(false);

  
  return (
    <div>
      <div className="md:inline hidden">
        {links.map((link) => (
          <Link
            key={link.value}
            href={link.path}
            className={`text-md px-4 py-2 rounded-2xl hover:underline font-semibold ${
              pathname === link.path ? "bg-white text-black" : "text-white"
            }`}
          >
            {link.value}
          </Link>
        ))}
        {isLoggedIn && isAdmin && (
          <button className="text-md px-4 py-2 text-white rounded-2xl hover:underline font-semibold">
            Admin
          </button>
        )}
        {isLoggedIn ? (
          <button className="text-md px-4 py-2 text-white rounded-2xl hover:underline font-semibold">
            Logout
          </button>
        ) : (
          <button className="text-md px-4 py-2 text-white rounded-2xl hover:underline font-semibold">
            Login
          </button>
        )}
      </div>
      
      
        <div
          className="block text-4xl text-white md:hidden cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <GiHamburgerMenu />
        </div>
      
        <div className={`md:hidden top-0 z-50 block ${showMenu?`translate-y-0 opacity-100`:`-translate-y-[250px] opacity-0`} duration-300 absolute flex flex-col text-white left-0 w-screen bg-sky-950 text-center `}>
          <div onClick={()=>{
            setShowMenu(!showMenu)
          }}
          className="px-4 py-2 self-end cursor-pointer">
            <IoClose className="text-6xl " />
          </div>
          <div className="flex items-center flex-col mt-[0.5vh]">
          {links.map((link) => (
          <Link
            key={link.value}
            href={link.path}
            className={`text-md px-4 py-2 w-screen border-collapse  hover:underline font-semibold  border-t border-b ${
              pathname === link.path ? "" : ""
            }`}
          >
            {link.value}
          </Link>

        ))}
        </div>
        </div>
        <div className={`${showMenu ? `block opacity-100 ` : `hidden opacity-0`} md:hidden duration-1000 z-20 top-0 left-0 absolute backdrop-blur-sm min-h-screen w-screen`}>
            
          </div>
      
    </div>
  );
};

export default Links;
