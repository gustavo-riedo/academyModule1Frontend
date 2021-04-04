import React from "react";
import tradeItem from "./tradeItem";


function tradeList(trades) {
    return(
        <ul>
            {trades.map((trade, index) => (tradeItem(trade, index)))}
        </ul>
    );
}

export default tradeList;