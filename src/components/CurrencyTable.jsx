import React from "react";
import CurrencyRow from "./CurrencyRow";

const CurrencyTable = ({ currencies, rates }) => {
  return (
    <div className="w-full max-w-md overflow-auto bg-white shadow-lg rounded-lg">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
              Currency
            </th>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
              We Buy
            </th>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
              Exchange Rate
            </th>
            <th className="py-2 px-4 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
              We Sell
            </th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <CurrencyRow
              key={currency}
              currency={currency}
              rate={rates[currency]}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyTable;
