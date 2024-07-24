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
import { Stock } from "@/models/Stock";

interface CardListProps {
  companies: CompanySearch[];
  handleSaveClick: (symbol: string) => void;
  handleAnalyzeClick: (symbol: string) => void;
}

interface PortfolioListProps {
  stocks: Stock[];
  handleRemoveClick: (symbol: string) => void;
  handleAnalyzeClick: (symbol: string) => void;
}

export const CardList: React.FC<CardListProps> = ({
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
                  <Button
                    className="bg-green-300"
                    onClick={() => handleSaveClick(company.symbol)}
                  >
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

export const PortfolioList: React.FC<PortfolioListProps> = ({
  stocks,
  handleRemoveClick,
  handleAnalyzeClick,
}) => {
  return (
    <div>
      {stocks.length > 0 ? (
        stocks.map((stock) => {
          return (
            <Card
              id={stock.symbol}
              key={stock.id}
              className="flex justify-between"
            >
              <div>
                <CardHeader>
                  <CardTitle>
                    <Link to={`/stock/${stock.symbol}/profile`}>
                      {stock.symbol}
                    </Link>
                  </CardTitle>
                  <CardDescription>{stock.companyName}</CardDescription>
                </CardHeader>
                <CardContent className="space-x-3">
                  <Button
                    className="bg-red-400"
                    onClick={() => handleRemoveClick(stock.symbol)}
                  >
                    Remove
                  </Button>
                  <Button
                    className="bg-blue-300"
                    onClick={() => handleAnalyzeClick(stock.symbol)}
                  >
                    Analyze
                  </Button>
                </CardContent>
              </div>
              <CardContent className="content-center">
                {stock.price}
              </CardContent>
            </Card>
          );
        })
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          Portfolio Empty!
        </p>
      )}
      <Card></Card>
    </div>
  );
};
