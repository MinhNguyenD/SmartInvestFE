import { Button } from "./ui/button";

const LandingNavbar = () => {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <div className="relative">
        <p className="text-2xl font-bold">Smavest</p>
      </div>
      <div className="flex items-center gap-x-4">
        <p className="font-semibold">Home</p>
        <p className="font-semibold">Contact</p>
        <p className="font-semibold">FAQ</p>
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
