import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const LandingNavbar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <div className="relative">
        <p className="text-2xl font-bold">Smavest</p>
      </div>
      <div className="flex items-center gap-x-4">
        <Link to="/contact" className="font-semibold">
          Contact
        </Link>
        <Link to="/faq" className="font-semibold">
          FAQ
        </Link>
        <Link to="/register" className="font-semibold">
          <Button variant={"outline"} className="rounded-full">
            Register
          </Button>
        </Link>
        <Link to="/login" className="font-semibold">
          <Button variant={"outline"} className="rounded-full">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
