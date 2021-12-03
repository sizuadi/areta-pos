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
    <div id="kt_body" className="header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed">
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <Sidebar />
          <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
            <Navbar />
            <ContentWrapper component={component} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
