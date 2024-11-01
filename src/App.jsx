import React, { useEffect, useState } from "react";
import axios from "axios";
import CurrencyTable from "./components/CurrencyTable";

const App = () => {
  const [rates, setRates] = useState({});
  const currencies = ["CAD", "IDR", "JPY", "CHF", "EUR", "GBP"];
  const apiKey = "1005cfa0cbfe49a498966100f571789a";

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://api.currencyfreaks.com/latest?apikey=${apiKey}`
        );
        setRates(response.data.rates);
      } catch (error) {
        console.error("Error fetching the rates:", error);
      }
    };

    fetchRates();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-2xl font-bold mb-6">Currency Exchange Rates</h1>
      <CurrencyTable currencies={currencies} rates={rates} />
    </div>
  );
};

export default App;
