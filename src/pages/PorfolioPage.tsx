import { PortfolioList } from "@/components/CardList";
import Navbar from "@/components/Navbar";
import { Stock } from "@/models/Stock";
import { getPortfolio, removeStock } from "@/services/PortfolioService";
import { useEffect, useState } from "react";

const PorfolioPage = () => {
  const [portfolioHoldings, setPortfolioHoldings] = useState<Stock[]>([]);
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await getPortfolio();
        setPortfolioHoldings(res);
      } catch {
        console.log("Server error, fetch portfolio failed");
      }
    };

    fetchPortfolio();
  }, []);

  const handleAnalyze = async (symbol: string) => {};

  const handleRemove = async (symbol: string) => {
    try {
      await removeStock(symbol);
      const res = await getPortfolio();
      setPortfolioHoldings(res);
    } catch (error) {
      alert("can't remove stock from portfolio");
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <PortfolioList
        stocks={portfolioHoldings}
        handleAnalyzeClick={handleAnalyze}
        handleRemoveClick={handleRemove}
      ></PortfolioList>
    </div>
  );
};

export default PorfolioPage;
