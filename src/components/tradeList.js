import React from 'react';
import tradeItem from './tradeItem';

function tradeList(trades) {
   return (
      <ul className="historyList">
         {trades.map((trade, index) => tradeItem(trade, index))}
      </ul>
   );
}

export default tradeList;
