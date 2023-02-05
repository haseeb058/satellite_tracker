import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Grid } from "ag-grid-community";

const AgGrid = (data) => {
  const rowData = useState(data);
  // [
  //   { Longitude: "Toyota", Latitude: "Celica", Time: 35000 },
  //   { Longitude: "Toyota", Latitude: "Celica", Time: 35000 },
  //   { Longitude: "Toyota", Latitude: "Celica", Time: 35000 },
  // ];

  const columnDefs = useState([
    { headerName: "Longitude", field: "Longitude" },
    { headerName: "Latitude", field: "Latitude" },
    { headerName: "Time Stamp", field: "timestamp" },
  ]);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: 400,
        width: "100%",
        padding: "20px 0px",
        margin: "20px auto",
      }}
    >
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default AgGrid;
