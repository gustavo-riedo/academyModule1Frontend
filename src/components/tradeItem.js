import React from 'react';

function tradeItem(trade, index) {
   return (
      <>
         <li key={index} className="historyItem">
            <p className="historyItemType">{trade.type}</p>
            <p className="historyItemDate">{trade.date}</p>
            <p className="historyItemDeposit">{trade.deposit}</p>
            <input type="button" value="Retrade" />
         </li>
      </>
   );
}

export default tradeItem;
