import Link from "next/link";

export default async function Posts() {
  const response = await fetch("https://faturaapi.muhammetcoskun.com.tr/api/invoice/alllist");
  const invoice = await response.json();

  
  return (
    <div className="fatura">
      {invoice.map((invoice, index) => (
        <Link href={"/detail/" + invoice.invoiceId} key={invoice.invoiceId} className="fatura-link">
          <div className="bilgi">
            <p className="kod">{invoice.invoiceId}</p>
            <p className="deta">{invoice.invoiceDate}</p>
            <p className="deta">{invoice.user.name}</p>
          </div>
          <div className="fiyat">
            <p className="price">{invoice.totalAmount}</p>
            <p className="status">{invoice.status}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

