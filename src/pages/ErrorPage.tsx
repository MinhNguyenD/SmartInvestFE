import Footer from "@/components/Footer";
import LandingNavbar from "@/components/LandingNavbar";
import { ModeToggle } from "@/components/mode-toggle";
import { ErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <main className="h-screen">
        <LandingNavbar />
        <div className="flex justify-end px-4">
          <ModeToggle />
        </div>
        <div className="flex items-center justify-center py-36">
          <div className="text-center">
            <h1 className="font-semibold">Oops!</h1>
            <br></br>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>
                {(error as ErrorResponse).statusText ||
                  (error as Error).message}
              </i>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
