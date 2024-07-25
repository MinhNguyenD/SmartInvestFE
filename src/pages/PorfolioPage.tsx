import { PortfolioList } from "@/components/CardList";
import Navbar from "@/components/Navbar";
import { Stock } from "@/models/Stock";
import { createAnalysis } from "@/services/AnalyzeService";
import { getPortfolio, removeStock } from "@/services/PortfolioService";
import { useEffect, useState } from "react";

const PorfolioPage = () => {
  const [portfolioHoldings, setPortfolioHoldings] = useState<Stock[]>([]);
  const [htmlContent, setHtmlContent] = useState("");
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
      const res = await createAnalysis(symbol);
      setHtmlContent(res.content);
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
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default PorfolioPage;
