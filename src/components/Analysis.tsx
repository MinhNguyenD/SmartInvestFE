import React from "react";
import { Button } from "./ui/button";

interface AnalysisProps {
  analysisContent: string;
}

const Analysis: React.FC<AnalysisProps> = ({ analysisContent }) => {
  return (
    <div className="container mt-4 p-4 rounded shadow-sm">
      <div dangerouslySetInnerHTML={{ __html: analysisContent }} />
      <div className="mt-4 space-x-3">
        <Button className="bg-blue-300">Re-Analyze</Button>
        <Button className="mt-3 bg-green-300">Email Analysis</Button>
      </div>
    </div>
  );
};

export default Analysis;
