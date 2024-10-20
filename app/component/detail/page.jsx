"use client"
import "@/app/component/detail/detail.css"
import Link from "next/link"
import { useState } from "react";

export default function Detail() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
      <div className="container-detail">
            <div className="detail">
      <Link href={"/"}>Go back</Link>
      <div className="detail-header">
        <div className="status-detail">
          <p className="detail-status">Status</p>
          <p className="peding">Pending</p>
        </div>
        <div className="detail-btn">
          <button onClick={toggleSidebar}>Edit</button>
          <button>Delete</button>
          <button>Mark as Paid</button>
        </div>
      </div>
      <div className="fatura-detail">
        <div className="fatura-header">
          <div className="left">
            <p className="faura-kod">#XM9141</p>
            <p className="grapgic">Graphic Design</p>
          </div>
          <div className="right">
            <p>19 Union Terrace</p>
            <p>London</p>
            <p>E1 3EZ</p>
            <p>United Kingdom</p>
          </div>
        </div>
        <div className="fatura-main">
          <div className="fatura-date">
            <div className="faturainvoice">
              <p>Invoice Date</p>
              <strong>21 Aug 2021</strong>
            </div>
            <div className="faturainvoice">
              <p>Payment Due</p>
              <strong>20 Sep 2021</strong>
            </div>
          </div>
          <div className="bill">
            <div className="bill-header">
              <p>Bill To</p>
              <strong>Alex Grim</strong>
            </div>
            <div className="bill-content">
              <p>84 Church Way</p>
              <p>Bradford</p>
              <p>BD1 9PB</p>
              <p>United Kingdom</p>
            </div>
          </div>
          <div className="sent">
            <p>Sent to</p>
            <strong>alexgrim@mail.com</strong>
          </div>
        </div>
        <div className="fatura-cikti">
          <div className="cikti-header">
            <div className="name">
              <p>Item Name</p>
            </div>
            <div className="cikti-footer">
              <div className="cikti-price">
                <p>QTY.</p>
                <p>Price</p>
              </div>
              <p>Total</p>
            </div>
          </div>
          <div className="cikti-header">
            <div className="name-s">
              <p>Banner Design</p>
            </div>
            <div className="cikti-footer">
              <div className="cikti-price">
                <p className="cikti-prices">1</p>
                <p className="cikti-prices">£ 156.00</p>
              </div>
              <p>£ 156.00</p>
            </div>
          </div>
          <div className="cikti-header">
            <div className="name-s">
              <p>Email Design</p>
            </div>
            <div className="cikti-footer">
              <div className="cikti-price">
                <p>2</p>
                <p>£ 200.00</p>
              </div>
              <p>£ 400.00</p>
            </div>
          </div>
        </div>
          <div className="footer-fatura">
            <p>Amount Due</p>
            <h1>£ 556.00</h1>
          </div>
      </div>
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