function Navbar() {
  return (
    <header className="navbar">

      <div>
        <h2>Construction Equipment Management</h2>
        <p>Manage rentals, assets and dispatch operations</p>
      </div>

      <div className="navbar-user">
        <span className="notification">🔔</span>

        <div className="user-info">
          <strong>Admin</strong>
          <span>Administrator</span>
        </div>

        <div className="user-avatar">
          A
        </div>
      </div>

    </header>
  );
}

export default Navbar;
