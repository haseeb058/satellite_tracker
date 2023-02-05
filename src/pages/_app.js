import { useEffect } from "react";
import { useRouter } from "next/router";

import Navbar from "../components/navbar";

import "../styles/globals.scss";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function App({ Component, pageProps }) {
  const { pathname, push } = useRouter();

  useEffect(() => {
    pathname === "/" && push("/login");
  }, []);

  return (
    <>
      {pathname !== "/login" && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
