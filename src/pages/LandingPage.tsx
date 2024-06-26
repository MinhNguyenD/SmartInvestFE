import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LandingNavbar from "@/components/LandingNavbar";

const LandingPage = () => {
  return (
    <main className="h-full bg-[#111827]">
      <LandingNavbar />
      <Hero />
      <Footer />
    </main>
  );
};

export default LandingPage;
