import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
        <div className="logo-icon">🚜</div>
        <div>
          <h2>BuildAsset</h2>
          <span>Logistics</span>
        </div>
      </div>

      <nav className="sidebar-menu">

        <NavLink to="/dashboard" className="menu-item">
          🏠 <span>Dashboard</span>
        </NavLink>

        <NavLink to="/equipment" className="menu-item">
          🚜 <span>Equipment</span>
        </NavLink>

        <NavLink to="/rentals" className="menu-item">
          📅 <span>Rentals</span>
        </NavLink>
        <NavLink to="/rental-calendar" className="menu-item">
  📆 <span>Rental Calendar</span>
</NavLink>

        <NavLink to="/dispatch" className="menu-item">
          🚚 <span>Dispatch</span>
        </NavLink>

        <NavLink to="/tracking" className="menu-item">
          📍 <span>Tracking</span>
        </NavLink>

        <NavLink to="/maintenance" className="menu-item">
          🔧 <span>Maintenance</span>
        </NavLink>

        <NavLink to="/contractors" className="menu-item">
          👷 <span>Contractors</span>
        </NavLink>

        <NavLink to="/reports" className="menu-item">
          📊 <span>Reports</span>
        </NavLink>
        <NavLink to="/tracking" className="menu-item">
  📍 <span>Tracking</span>
</NavLink>
        <NavLink to="/maintenance" className="menu-item">
  🔧 <span>Maintenance</span>
</NavLink>
<NavLink to="/contractors" className="menu-item">
  👷 <span>Contractors</span>
</NavLink>
<NavLink to="/reports" className="menu-item">
  📊 <span>Reports</span>
</NavLink>
      </nav>

      <button className="logout-button" onClick={handleLogout}>
        🚪 Logout
      </button>

    </aside>
  );
}

export default Sidebar;