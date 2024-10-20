"use client";
import { useState, useRef, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false); 
  };


  return (
    <div className="sidebar-container">
      <button onClick={toggleSidebar} className="toggle-button">
        {isOpen ? "Kapat" : "Aç"}
      </button>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={closeSidebar} className="close-button">
          X
        </button>
        <h2>Sidebar</h2>
        <ul>
          <li>Anasayfa</li>
          <li>Hakkımızda</li>
          <li>İletişim</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
