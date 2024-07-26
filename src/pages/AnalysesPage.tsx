import { AnalysesList } from "@/components/CardList";
import Navbar from "@/components/Navbar";
import { Analysis } from "@/models/Analysis";
import { deleteAnalysis, getAllAnalyses } from "@/services/AnalyzeService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AnalysesPage = () => {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);

  const navigate = useNavigate();
  const handleView = (id: number) => {
    navigate(`/analyses/${id}`);
  };

  const handleDelete = async (id: number) => {
    await deleteAnalysis(id);
    var analyses = await getAllAnalyses();
    setAnalyses(analyses);
  };

  useEffect(() => {
    const fetchAnalyses = async () => {
      try {
        const res = await getAllAnalyses();
        setAnalyses(res);
      } catch (error) {}
    };
    fetchAnalyses();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mt-3">
        <h1 className="font-bold my-3">My Analyses</h1>
        <AnalysesList
          analyses={analyses}
          handleDeleteClick={handleDelete}
          handleViewClick={handleView}
        ></AnalysesList>
      </div>
    </div>
  );
};

export default AnalysesPage;
