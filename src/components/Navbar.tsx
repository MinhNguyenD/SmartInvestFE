import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <div className="relative">
        <Link to="/home" className="text-2xl font-bold">
          Smavest
        </Link>
      </div>
      <div className="flex items-center gap-x-4">
        <Link to="/home" className="font-semibold">
          Market
        </Link>
        <Link to="/analyses" className="font-semibold">
          Analyses
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
