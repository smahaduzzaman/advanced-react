import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    fetch("orders.json")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders);
      });
  }, []);

  const filteredOrders =
    selectedTab === "all"
      ? orders
      : orders.filter((order) => order.deliveryType === selectedTab);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);

  // Change tab
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  // Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <ul className="mb-2">
        <li className="btn btn-danger" onClick={() => handleTabChange("all")}>
          All Orders
        </li>
        <li
          className="btn btn-primary"
          onClick={() => handleTabChange("regular")}
        >
          Regular Delivery
        </li>
        <li
          className="btn btn-success"
          onClick={() => handleTabChange("express")}
        >
          Express Delivery
        </li>
      </ul>
      {/* Create a bootstrap table to show this data */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Delivery Type</th>
            <th scope="col">Delivery Date</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.id}>
              <th scope="row">{order.id}</th>
              <td>{order.customerName}</td>
              <td>{order.deliveryType}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredOrders.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default OrderTable;
