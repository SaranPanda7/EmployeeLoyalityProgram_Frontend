import React from "react";
import Pagination from "react-bootstrap/Pagination";
function PaginationView() {
  return (
    <div
      style={{
        margin: "auto",
        width: 300,
        padding: 30,
      }}
    >
      <Pagination>
        <Pagination.Item> Prev </Pagination.Item>

        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>

        <Pagination.Item> Next </Pagination.Item>
      </Pagination>
    </div>
  );
}

export default PaginationView;
