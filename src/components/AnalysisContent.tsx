import React from "react";
import { Button } from "./ui/button";

interface AnalysisProps {
  analysisContent: string;
}

const AnalysisContent: React.FC<AnalysisProps> = ({ analysisContent }) => {
  return (
    <div className="container mt-4 p-4 rounded shadow-sm">
      <div dangerouslySetInnerHTML={{ __html: analysisContent }} />
      <div className="mt-4 space-x-3">
        <Button className="mt-3 bg-green-300">Email Analysis</Button>
      </div>
    </div>
  );
};

export default AnalysisContent;
