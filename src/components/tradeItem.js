import React from 'react';

function tradeItem(trade, index) {
   return (
      <>
         <li key={index} className="historyItem">
            <p className="historyItemType">{trade.type}</p>
            <p className="historyItemDate">{trade.createdAt}</p>
            <p className="historyItemDeposit">Value: {trade.income}</p>
         </li>
      </>
   );
}

export default tradeItem;
