import React from "react";
import { Button } from "./ui/button";

const LandingNavbar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <div className="relative">
        <p className="text-2xl font-bold text-white">Smavest</p>
      </div>
      <div className="flex items-center gap-x-4">
        <p className="text-white font-semibold">Home</p>
        <p className="text-white font-semibold">Contact</p>
        <p className="text-white font-semibold">FAQ</p>
        <Button variant={"outline"} className="rounded-full">
          Register
        </Button>
        <Button variant="outline" className="rounded-full">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default LandingNavbar;
