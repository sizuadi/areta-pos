import React, { useEffect } from "react";

import { initApp } from "../Util/themeInit";
import ContentWrapper from "./Partials/ContentWrapper";
import Footer from "./Partials/Footer";
import Navbar from "./Partials/Navbar";
import Sidebar from "./Partials/Sidebar";

export default function Admin({ component }) {
  useEffect(() => {
    initApp();
  });
    
  return (
    <div className="page d-flex flex-row flex-column-fluid">
      <Sidebar />
      <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
        <Navbar />
        <ContentWrapper component={component} />
        <Footer />
      </div>
    </div>
  );
}
