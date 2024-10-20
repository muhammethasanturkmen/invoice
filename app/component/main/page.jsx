"use client"
import "@/app/component/main/main.css"
import Link from "next/link"
import { useState } from "react";
import Formain from "./server-main-side";

export default function Main() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="main">
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
      <div className="fatura">
        <Link href={"/"} className="fatura-link">
          <div className="bilgi">
            <p className="kod">#RT3080</p>
            <p className="deta">Due  19 Aug 2021</p>
            <p className="deta">Jensen Huang</p>
          </div>
          <div className="fiyat">
            <p className="price">£ 1,800.90</p>
            <p className="status">Paid</p>
          </div>
        </Link>
        <Link href={"/"} className="fatura-link">
          <div className="bilgi">
            <p className="kod">#RT3080</p>
            <p className="deta">Due  19 Aug 2021</p>
            <p className="deta">Jensen Huang</p>
          </div>
          <div className="fiyat">
            <p className="price">£ 1,800.90</p>
            <p className="status">Paid</p>
          </div>
        </Link>
        <Link href={"/"} className="fatura-link">
          <div className="bilgi">
            <p className="kod">#RT3080</p>
            <p className="deta">Due  19 Aug 2021</p>
            <p className="deta">Jensen Huang</p>
          </div>
          <div className="fiyat">
            <p className="price">£ 1,800.90</p>
            <p className="status">Paid</p>
          </div>
        </Link>
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
  )
}