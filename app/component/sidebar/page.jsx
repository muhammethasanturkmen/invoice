"use client";
import { useState, useRef, useEffect } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="side-main-bar">
      <div className="header-start">
        <h1>Invoices</h1>
        <div className="newinvoice">
          <p>Filter by status</p>
          <button onClick={toggleSidebar}>
            <span>+</span>
            New Invoice
          </button>
        </div>
      </div>
      <div className="container">
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="newcontainer">
            <form className="newform" action="">
              <Formain />
              <div className="btn">
                <button onClick={toggleSidebar}>Discard</button>
                <div className="btn-end">
                  <button>Save as Draft</button>
                  <button>Save & Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

