import logo from '@/app/assets/logo.png';
import profile from '@/app/assets/image-avatar.jpg';
import './Header.css'; // CSS file

function Header() {


  return (
    <div>
      {/* Header */}
      <header className="header">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26"><path fill="#FFF" fill-rule="evenodd" d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"/></svg>
          <div className="divider"></div>
          <img src={profile} className="profile-img" />
      </header>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <img src={logo} className="sidebar-logo" alt="logo" />
          <div>
            <div className="sidebar-divider"></div>
            <img src={profile} className="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
