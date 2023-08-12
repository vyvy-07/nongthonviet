import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { PageProvider } from "../hooks/useContext";

const MainLayout = () => {
  return (
    <PageProvider>
      <Header />
      <Outlet />
      <Footer />
    </PageProvider>
  );
};

export default MainLayout;
