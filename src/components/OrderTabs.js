import React from "react";

const OrderTabs = ({ selectedTab, handleTabChange }) => {
  return (
    <ul>
      <li
        className={selectedTab === "all" ? "active" : ""}
        onClick={() => handleTabChange("all")}
      >
        All Orders
      </li>
      <li
        className={selectedTab === "regular" ? "active" : ""}
        onClick={() => handleTabChange("regular")}
      >
        Regular Delivery
      </li>
      <li
        className={selectedTab === "express" ? "active" : ""}
        onClick={() => handleTabChange("express")}
      >
        Express Delivery
      </li>
    </ul>
  );
};

export default OrderTabs;
