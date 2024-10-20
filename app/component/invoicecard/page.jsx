import rightArrow from '@/app/assets/icon-arrow-right.svg';
import './InvoiceCard.css'; // CSS dosyası
import Link from 'next/link';

function InvoiceCard({ invoice }) {
  return (
    <Link href={"/"}>
      <div className="invoice-card">
        {/* Desktop Screen */}
        <div className="invoice-header">
          <h2>
            <span className="invoice-id">#</span>
            
          </h2>

          <h2 className="invoice-details">Due </h2>
          <h2 className="invoice-details"></h2>
        </div>

        <div className="invoice-footer">
          <h1 className="invoice-total">£ </h1>
          <img src="" className="arrow-icon" alt="arrow-icon" />
        </div>
      </div>
    </Link>
  );
}

export default InvoiceCard;
