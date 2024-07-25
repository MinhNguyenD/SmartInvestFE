import Analysis from "@/components/Analysis";
import Navbar from "@/components/Navbar";
import { createAnalysis } from "@/services/AnalyzeService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnalysisPage = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [analysis, setAnalysis] = useState("");
  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const res = await createAnalysis(symbol!);
        console.log("Helloooo");
        setAnalysis(res.content);
      } catch (error) {}
    };
    fetchAnalysis();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Analysis analysisContent={analysis}></Analysis>
    </div>
  );
};

export default AnalysisPage;
