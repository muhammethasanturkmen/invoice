"use client"
import "@/app/detail/detail.css"
import Link from "next/link"
import Form from "../server-side";


export default async function Detail({ params }) {
  const { id } = params;
  const response = await fetch(`https://faturaapi.muhammetcoskun.com.tr/api/invoice/${id}`);
  const data = await response.json();
  console.log(data);
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
          <button>Edit</button>
          <button>Delete</button>
          <button>Mark as Paid</button>
        </div>
      </div>
      <div className="fatura-detail">
        <div className="fatura-header">
          <div className="left">
            <p className="faura-kod">{data.invoiceId}</p>
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
              <strong>{data.invoiceDate}</strong>
            </div>
            <div className="faturainvoice">
              <p>Payment Due</p>
              <strong>20 Sep 2021</strong>
            </div>
          </div>
          <div className="bill">
            <div className="bill-header">
              <p>Bill To</p>
              <strong>{data.name}</strong>
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
            <strong>{data.email}</strong>
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
                <p className="cikti-prices">£ {data.totalAmount}</p>
              </div>
              <p>£ {data.totalAmount}</p>
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
          <div className="sidebar">
            <div className="newcontainer">
            <form className="newform" action="">
              <Form />
                <div className="btn">
                  <button>Discard</button>
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