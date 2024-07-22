import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <div className="relative">
        <Link to="/home" className="text-2xl font-bold">
          Smavest
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        <Link to="/market" className="font-semibold">
          Market
        </Link>
        <Link to="/portfolio" className="font-semibold">
          Portfolio
        </Link>
        <ProfileDropdown></ProfileDropdown>
        <div className="flex justify-end">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
