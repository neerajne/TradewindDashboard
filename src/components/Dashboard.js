import React from "react";
import { Route, Routes } from "react-router-dom";

import { Apps } from "./Apps";
import { Funds } from "./Funds";
import { Holdings } from "./Holdings";
import { Orders } from "./Orders";
import { Position } from "./Position";
import { Summary } from "./Summary";
import { WatchList } from "./WatchList";
// import { WatchList } from "./WatchList";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* <GeneralContextProvider> */}  
      <WatchList />
      {/* </GeneralContextProvider> */}
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Position />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
