import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
const BaseLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/zenzonespace" ? null : <Header />}
      {children}
      {pathname === "/zenzonespace" ? null : <Footer />}
    </>
  );
};

export default BaseLayout;
