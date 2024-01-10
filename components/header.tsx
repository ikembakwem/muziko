"use client";
import { useState } from "react";
import { MenuButton } from "./menu-button";
import ProfileIcon from "@assets/icons/user.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="w-full fixed bg-black z-10">
        <div className="flex items-center justify-between mx-3">
          <div>
            <MenuButton
              isOpen={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
          <div className="text-lg font-semibold tracking-wide text-white">
            Muziko
          </div>
          <div className="text-white mr-3.5">
            <ProfileIcon className="h-7 w-7" />
          </div>
        </div>
      </nav>
      <div className="h-[52px]"></div>
    </header>
  );
}
export default Header;
