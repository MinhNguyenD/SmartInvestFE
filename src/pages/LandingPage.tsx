import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LandingNavbar from "@/components/LandingNavbar";
import { ModeToggle } from "@/components/mode-toggle";

const LandingPage = () => {
  return (
    <>
      <main className="h-screen">
        <LandingNavbar />
        <div className="flex justify-end px-4">
          <ModeToggle />
        </div>
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
