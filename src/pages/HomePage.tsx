import { CardList } from "@/components/CardList";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { saveStock } from "@/services/PortfolioService";
import { CompanySearch } from "@/stock";
import axios from "axios";
import { useState } from "react";

const HomePage = () => {
  const [searchResults, setSearchResult] = useState<CompanySearch[]>([]);
  const [searchSubmitted, setSearchSubmitted] = useState(false);
  const handleSearch = async (query: string) => {
    try {
      const res = await axios.get<CompanySearch[]>(
        `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${
          import.meta.env.VITE_STOCK_API_KEY
        }`
      );
      setSearchResult(res.data);
      setSearchSubmitted(true);
    } catch {
      console.log("Server error");
    }
  };

  const handleSave = async (symbol: string) => {
    try {
      await saveStock(symbol);
    } catch (error) {
      alert("cant save stock");
      console.log(error);
    }
  };

  const handleAnalyze = (symbol: string) => {
    console.log("Analyze this stock");
  };

  return (
    <div>
      <Navbar></Navbar>
      <SearchBar handleSearchSubmit={handleSearch}></SearchBar>
      <br></br>
      {searchSubmitted && (
        <CardList
          handleSaveClick={handleSave}
          handleAnalyzeClick={handleAnalyze}
          companies={searchResults}
        ></CardList>
      )}
    </div>
  );
};

export default HomePage;
