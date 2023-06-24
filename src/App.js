import "./App.css";
import React from "react";
// import OrderTabs from "./components/OrderTabs";
import OrderTable from "./components/OrderTable";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <h1 className="mt-5">Anti Blue Ray Glasses Orders</h1>
      {/* <OrderTabs /> */}
      <OrderTable />
    </div>
  );
};

export default App;
