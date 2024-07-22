import { CompanySearch } from "@/stock";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface CardListProps {
  companies: CompanySearch[];
  handleSaveClick: () => void;
  handleAnalyzeClick: () => void;
}

const CardList: React.FC<CardListProps> = ({
  companies,
  handleSaveClick,
  handleAnalyzeClick,
}) => {
  return (
    <div>
      {companies.length > 0 ? (
        companies.map((company) => {
          return (
            <Card
              id={company.symbol}
              key={company.name}
              className="flex justify-between"
            >
              <div>
                <CardHeader>
                  <CardTitle>
                    <Link to={`/stock/${company.symbol}/profile`}>
                      {company.symbol}
                    </Link>
                  </CardTitle>
                  <CardDescription>{company.name}</CardDescription>
                </CardHeader>
                <CardContent className="space-x-3">
                  <Button className="bg-green-300" onClick={handleSaveClick}>
                    Save
                  </Button>
                  <Button className="bg-blue-300" onClick={handleAnalyzeClick}>
                    Analyze
                  </Button>
                </CardContent>
              </div>
              <CardContent className="content-center">
                {company.exchangeShortName}
              </CardContent>
            </Card>
          );
        })
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
      <Card></Card>
    </div>
  );
};

export default CardList;
