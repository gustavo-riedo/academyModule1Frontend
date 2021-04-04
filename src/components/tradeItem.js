import React from "react";

function tradeItem(trade, index) {
    return (
        <>  
            <li key={index} className="tradeIten">
                <p className="tradeType">{trade.type}</p>
                <p className="tradeTime">{trade.date}</p>
                <p className="tradeValue">{trade.deposit}</p>
                <input type="button" value="Retrade"/>
            </li>
        </>
    );
}

export default tradeItem;