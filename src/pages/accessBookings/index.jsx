import React, { useEffect, useState } from "react";
import axios from "axios";

import AgGrid from "../../components/agGrid";

import style from "../../styles/accessBookings.module.scss";

const AccessBookings = () => {
  const [status, setStatus] = useState(true);
  const [data, setData] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getData();
  }, [counter]);

  const getData = async () => {
    if (counter < 20) {
      axios
        .get("http://api.open-notify.org/iss-now.json")
        .then((res) => {
          setTimeout(() => setCounter(counter + 1), 5000);
          setData((prev) => [...prev, res.data]);
        })
        .catch((e) => console.error(e));
    }
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
      <div className={style.contentWrapper}>
        {status ? <AgGrid data={data} /> : <AgGrid data={data} />}
      </div>
    </main>
  );
};

export default AccessBookings;
