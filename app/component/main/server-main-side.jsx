export default function Formain() {
  return (
    <div>
      <strong>New Invoice</strong>
              
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
    </div>
  )
}