import "./hasan.css"
export default function New() {
  return (
    <div className="newcontainer">
      <strong>New Invoice</strong>
      <form className="newform" action="">
        <div className="ilk">
          <p className="bas">bill Form</p>
          <div className="street">
            <label htmlFor="">Street Address</label>
            <input type="text" />
          </div>
          <div className="address">
            <div className="city">
              <label htmlFor="">city</label>
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
            <label htmlFor="">city</label>
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
              <select name="" id="">
                <option value="">next</option>
              </select>
            </div>
          </div>
          <div className="project">
            <label htmlFor="">project</label>
            <input type="text" />
          </div>
        </div>
          <strong className="item">Item List</strong>
        <div className="item-list">
          <div className="title">
            <p>item name</p>
            <p>Qtl.</p>
            <p>Price</p>
            <p>Total</p>
          </div>
          <div className="inputtotal">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <p>156</p>
            <button>silme</button>
          </div>
          <button className="add">+ Add New Item</button>
        </div>
        <div className="btn">
          <button>Discard</button>
          <div className="btn-end">
            <button>Save as Draft</button>
            <button>Save & Send</button>
          </div>
        </div>
      </form>
    </div>
  )
}