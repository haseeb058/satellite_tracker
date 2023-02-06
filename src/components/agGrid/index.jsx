import React, { useState } from "react";
import moment from "moment/moment";
import { Grid } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

const AgGrid = ({ data }) => {
  const defaultColDef = {
    flex: 1,
    minWidth: 100,
  };

  const longitudeGetter = (params) => {
    return params.node.data.iss_position.longitude;
  };

  const latitudeGetter = (params) => {
    return params.node.data.iss_position.latitude;
  };

  const timestampGetter = (params) => {
    return moment(params.node.data.timestamp).format("LT");
  };

  const [columnDefs] = useState([
    {
      headerName: "Longitude",
      field: "longitude",
      valueGetter: longitudeGetter,
    },
    { headerName: "Latitude", field: "latitude", valueGetter: latitudeGetter },
    {
      headerName: "Time Stamp",
      field: "timestamp",
      valueGetter: timestampGetter,
    },
  ]);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: 400,
        padding: "20px 0px",
        margin: "20px auto",
      }}
    >
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  );
};

export default AgGrid;
