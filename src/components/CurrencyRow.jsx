import React from "react";

const CurrencyRow = ({ currency, rate }) => {
  const exchangeRate = rate ? parseFloat(rate) : null;
  const weBuy = exchangeRate ? (exchangeRate * 1.05).toFixed(4) : "Loading...";
  const weSell = exchangeRate ? (exchangeRate * 0.95).toFixed(4) : "Loading...";

  return (
    <tr>
      <td className="py-2 px-4 border-b border-gray-200 text-sm whitespace-nowrap">
        {currency}
      </td>
      <td className="py-2 px-4 border-b border-gray-200 text-sm whitespace-nowrap">
        {weBuy}
      </td>
      <td className="py-2 px-4 border-b border-gray-200 text-sm whitespace-nowrap">
        {rate ? parseFloat(rate).toFixed(4) : "Loading..."}
      </td>
      <td className="py-2 px-4 border-b border-gray-200 text-sm whitespace-nowrap">
        {weSell}
      </td>
    </tr>
  );
};

export default CurrencyRow;
