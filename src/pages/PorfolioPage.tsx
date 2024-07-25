import { PortfolioList } from "@/components/CardList";
import Navbar from "@/components/Navbar";
import { Stock } from "@/models/Stock";
import { getPortfolio, removeStock } from "@/services/PortfolioService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PorfolioPage = () => {
  const [portfolioHoldings, setPortfolioHoldings] = useState<Stock[]>([]);
  const navigate = useNavigate();
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

  const handleAnalyze = async (symbol: string) => {
    try {
      navigate(`/stock/${symbol}/analysis`);
    } catch (error) {}
  };

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
