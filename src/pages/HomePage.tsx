import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  const search = (query: string) => {
    // axios.get
  };
  return (
    <div>
      <Navbar></Navbar>
      <SearchBar handleSearch={search}></SearchBar>
    </div>
  );
};

export default HomePage;
