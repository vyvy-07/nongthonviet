import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { PageProvider } from "../hooks/useContext";

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [pathname]);

  return (
    <PageProvider>
      <Header />
      <Outlet />
      <Footer />
    </PageProvider>
  );
};

export default MainLayout;
