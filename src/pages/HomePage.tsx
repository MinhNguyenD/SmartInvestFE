import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Navbar></Navbar>
      <Button
        onClick={async () => {
          const response = await axios.get("http://localhost:5035/api/stock");
          console.log(response.data);
        }}
      ></Button>
    </div>
  );
};

export default HomePage;
