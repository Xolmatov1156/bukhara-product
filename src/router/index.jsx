import React from "react";
import { Dashboard, Collection, About, Contacts, DetailPage } from "../pages";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";

const CustomRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default CustomRoutes;
