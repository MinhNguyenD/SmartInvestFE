import AnalysisContent from "@/components/AnalysisContent";
import Navbar from "@/components/Navbar";
import { Analysis } from "@/models/Analysis";
import { getAnalysisById } from "@/services/AnalyzeService";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnalysisPage = () => {
  const { id } = useParams<{ id: string }>();
  const [analysis, setAnalysis] = useState<Analysis>({
    id: 0,
    stockSymbol: "",
    dateCreated: "",
    content: "",
    userId: "",
    stockId: 0,
  });
  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const res = await getAnalysisById(Number(id)!);
        setAnalysis(res);
      } catch (error) {}
    };
    fetchAnalysis();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="font-bold">
          {analysis.stockSymbol}'s Financial Analysis
        </h1>
        <h4 className="font-semibold">{analysis.dateCreated}</h4>
        <AnalysisContent analysisContent={analysis!.content}></AnalysisContent>
      </div>
    </div>
  );
};

export default AnalysisPage;
