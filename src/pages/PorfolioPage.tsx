import { PortfolioList } from "@/components/CardList";
import Navbar from "@/components/Navbar";
import { Stock } from "@/models/Stock";
import { createAnalysis } from "@/services/AnalyzeService";
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
      const analysis = await createAnalysis(symbol!);
      navigate(`/analyses/${analysis.id}`);
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
      <div className="container">
        <h1 className="font-bold my-3">My Portfolio</h1>
        <PortfolioList
          stocks={portfolioHoldings}
          handleAnalyzeClick={handleAnalyze}
          handleRemoveClick={handleRemove}
        ></PortfolioList>
      </div>
    </div>
  );
};

export default PorfolioPage;
