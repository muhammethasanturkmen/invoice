"use client"
import "@/app/component/main/main.css"
import Link from "next/link"
import { useState } from "react";

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
            <strong>New Invoice</strong>
            <form className="newform" action="">
              <div className="ilk">
                <p className="bas">Bill From</p>
                <div className="street">
                  <label htmlFor="">Street Address</label>
                  <input type="text" />
                </div>
                <div className="address">
                  <div className="city">
                    <label htmlFor="">City</label>
                    <input type="text" />
                  </div>
                  <div className="post">
                    <label htmlFor="">Post Code</label>
                    <input type="text" />
                  </div>
                  <div className="country">
                    <label htmlFor="">Country</label>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <p className="bas">Bill To</p>
              <div className="iki">
                <div className="client">
                  <label htmlFor="">Client’s Name</label>
                  <input type="text" />
                </div>
                <div className="client">
                  <label htmlFor="">Client’s Email</label>
                  <input type="text" />
                </div>
                <div className="client">
                  <label htmlFor="">Street Address</label>
                  <input type="text" />
                </div>
              </div>

              <div className="address">
                <div className="city">
                  <label htmlFor="">City</label>
                  <input type="text" />
                </div>
                <div className="post">
                  <label htmlFor="">Post Code</label>
                  <input type="text" />
                </div>
                <div className="country">
                  <label htmlFor="">Country</label>
                  <input type="text" />
                </div>
              </div>

              <div className="tarih">
                <div className="date">
                  <div className="invoice-date">
                    <label htmlFor="">Invoice Date</label>
                    <input type="date" />
                  </div>
                  <div className="payment">
                    <label htmlFor="">Payment Terms</label>
                    <select>
                      <option value="">Next</option>
                    </select>
                  </div>
                </div>
                <div className="project">
                  <label htmlFor="">Project</label>
                  <input type="text" />
                </div>
              </div>

              <strong className="item">Item List</strong>
              <div className="item-list">
                <div className="title">
                  <p>Item Name</p>
                  <p>Qtl.</p>
                  <p>Price</p>
                  <p>Total</p>
                </div>
                <div className="inputtotal">
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <p>156</p>
                  <button>Sil</button>
                </div>
                <button className="add">+ Add New Item</button>
              </div>

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