"use client";
import { useState } from "react";
import { MenuButton } from "./menu-button";
import ProfileIcon from "@assets/icons/user.svg";
import { NavContent } from "./navigation-content";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative">
      <nav className="w-full asolute top-0 right-0 bg-black z-10">
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
        <div
          className={`absolute z-20 top-[44px] w-full bg-black ${
            !isOpen ? "hidden" : ""
          }`}
        >
          <NavContent />
        </div>
      </nav>
      {/* Placeholder for fixed navbar */}
    </header>
  );
}
export default Header;
