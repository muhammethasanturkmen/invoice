"use client"
import { useState } from "react";
import Mainform from "../main-form/page";

export default function Mainheader () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="header-start">
        <h1>Invoices</h1>
        <div className="newinvoice">
          <p>Filter by status</p>
          <button onClick={toggleSidebar}>
            <span>+</span>
            New Invoice
          </button>
        </div>
        {isSidebarOpen && <Mainform onClose={toggleSidebar} />}
      </div>
  )
}