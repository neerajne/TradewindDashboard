import React, { useState, useEffect } from "react";
import { positions } from "../data/data";
import axios from "axios";
export const Position = () => {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get("http://localhost:8080/allPositions");
        setPositions(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching holdings:", error);
      }
    };

    fetchPositions();
  }, []);
  return (
    <>
      <h3 className="title">Positions {positions.length}</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(currValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
