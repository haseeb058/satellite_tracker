import React from "react";
import Link from "next/link";
import Image from "next/image";

import Card from "../../components/card";

import style from "../../styles/dashboard.module.scss";

const Dashboard = () => {
  return (
    <main className={style.mainWrapper}>
      KLARITY Clinician Dashboard
      <div className={style.cardWrapper}>
        {menuArr.map(({ title, path }, index) => (
          <Link href={path} key={index}>
            <Card className={style.card}>
              <Image
                src={"/assets/fileIcon.svg"}
                alt={"icon"}
                width={80}
                height={80}
                className={style.imageWrapper}
              />
              <p className={style.label}>{title}</p>
            </Card>{" "}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;

const menuArr = [
  {
    title: "Access Bookings / Appointments",
    path: "/accessBookings",
  },
  {
    title: "Result Pending Review",
    path: "/dashboard",
  },
  {
    title: "Issue Manual Health Certification",
    path: "/dashboard",
  },
  {
    title: "EF ONLY - Issue Health Certification",
    path: "/dashboard",
  },
];
