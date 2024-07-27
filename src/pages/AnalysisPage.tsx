import AnalysisContent from "@/components/AnalysisContent";
import Navbar from "@/components/Navbar";
import { Analysis } from "@/models/Analysis";
import { getAnalysisById, sendEmailAnalysis } from "@/services/AnalyzeService";
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
  const handleEmailAnalysis = async () => {
    try {
      await sendEmailAnalysis(analysis.id);
    } catch (error) {
      console.log("Server error: Can't send email");
    }
  };
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
        <AnalysisContent
          analysisContent={analysis!.content}
          handleEmailClick={handleEmailAnalysis}
        ></AnalysisContent>
      </div>
    </div>
  );
};

export default AnalysisPage;
