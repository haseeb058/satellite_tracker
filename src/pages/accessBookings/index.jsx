import React, { useEffect, useState } from "react";
import axios from "axios";

import AgGrid from "../../components/agGrid";

import style from "../../styles/accessBookings.module.scss";

const AccessBookings = () => {
  const [status, setStatus] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get("http://api.open-notify.org/iss-now.json")
      .then((res) => setData((prev) => [...prev, res.data]))
      .catch((e) => console.error(e));
  };

  return (
    <main className={style.mainWrapper}>
      <div className={style.tabsWrapper}>
        <button
          onClick={() => setStatus(true)}
          className={status ? style.active : ""}
        >
          Results Pending Review
        </button>
        <button
          onClick={() => setStatus(false)}
          className={!status ? style.active : ""}
        >
          Results Reviewed
        </button>
      </div>
      {console.log(data)}
      <div className={style.contentWrapper}>
        {status ? <AgGrid data={data} /> : <div>two</div>}
      </div>
    </main>
  );
};

export default AccessBookings;
