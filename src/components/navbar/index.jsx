import React from "react";
import Link from "next/link";

import style from "../../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={style.topnav}>
      <div className={style.topnavCentered}>
        <Link href="/dashboard" className="style.active">
          Klarity Clinician Panel
        </Link>
      </div>
      <Link href="/dashboard">Home</Link>
      <Link href="/accessBookings">Access Bookings / Appointments</Link>
      <div className={style.topnavRight}>
        <Link href="/login">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
