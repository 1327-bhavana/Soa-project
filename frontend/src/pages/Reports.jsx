import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Reports() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">

          <div className="welcome-section">
            <div>
              <h1>Reports & Analytics</h1>
              <p>
                View equipment, rental, dispatch and maintenance reports.
              </p>
            </div>

            <button className="primary-button">
              ⬇ Export Report
            </button>
          </div>

          {/* Report Statistics */}

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon equipment-icon">
                🚜
              </div>

              <div>
                <p>Total Equipment</p>
                <h2>120</h2>
                <span className="positive">
                  65 available
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon rental-icon">
                📅
              </div>

              <div>
                <p>Total Rentals</p>
                <h2>48</h2>
                <span className="positive">
                  35 active
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon dispatch-icon">
                🚚
              </div>

              <div>
                <p>Total Dispatches</p>
                <h2>42</h2>
                <span className="positive">
                  12 in transit
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon maintenance-icon">
                🔧
              </div>

              <div>
                <p>Maintenance</p>
                <h2>28</h2>
                <span className="warning">
                  8 due
                </span>
              </div>
            </div>

          </div>

          {/* Reports */}

          <div className="reports-grid">

            <div className="dashboard-card">

              <div className="card-header">
                <h3>Equipment Summary</h3>
              </div>

              <div className="report-row">
                <span>Available Equipment</span>
                <strong>65</strong>
              </div>

              <div className="report-row">
                <span>Rented Equipment</span>
                <strong>35</strong>
              </div>

              <div className="report-row">
                <span>Under Maintenance</span>
                <strong>20</strong>
              </div>

            </div>

            <div className="dashboard-card">

              <div className="card-header">
                <h3>Rental Summary</h3>
              </div>

              <div className="report-row">
                <span>Active Rentals</span>
                <strong>35</strong>
              </div>

              <div className="report-row">
                <span>Pending Rentals</span>
                <strong>8</strong>
              </div>

              <div className="report-row">
                <span>Completed Rentals</span>
                <strong>5</strong>
              </div>

            </div>

            <div className="dashboard-card">

              <div className="card-header">
                <h3>Dispatch Summary</h3>
              </div>

              <div className="report-row">
                <span>In Transit</span>
                <strong>12</strong>
              </div>

              <div className="report-row">
                <span>Pending</span>
                <strong>7</strong>
              </div>

              <div className="report-row">
                <span>Delivered</span>
                <strong>23</strong>
              </div>

            </div>

            <div className="dashboard-card">

              <div className="card-header">
                <h3>Maintenance Summary</h3>
              </div>

              <div className="report-row">
                <span>Due</span>
                <strong>8</strong>
              </div>

              <div className="report-row">
                <span>In Progress</span>
                <strong>5</strong>
              </div>

              <div className="report-row">
                <span>Completed</span>
                <strong>15</strong>
              </div>

            </div>

          </div>

          {/* Revenue */}

          <div className="dashboard-card revenue-card">

            <div className="card-header">
              <div>
                <h3>Rental Revenue</h3>
                <p>Monthly rental revenue overview</p>
              </div>

              <strong className="revenue-value">
                ₹12,45,000
              </strong>
            </div>

            <div className="revenue-bars">

              <div className="revenue-item">
                <span>Apr</span>
                <div className="revenue-bar">
                  <div style={{ width: "55%" }}></div>
                </div>
              </div>

              <div className="revenue-item">
                <span>May</span>
                <div className="revenue-bar">
                  <div style={{ width: "65%" }}></div>
                </div>
              </div>

              <div className="revenue-item">
                <span>Jun</span>
                <div className="revenue-bar">
                  <div style={{ width: "72%" }}></div>
                </div>
              </div>

              <div className="revenue-item">
                <span>Jul</span>
                <div className="revenue-bar">
                  <div style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="revenue-item">
                <span>Aug</span>
                <div className="revenue-bar">
                  <div style={{ width: "88%" }}></div>
                </div>
              </div>

              <div className="revenue-item">
                <span>Sep</span>
                <div className="revenue-bar">
                  <div style={{ width: "95%" }}></div>
                </div>
              </div>

            </div>

          </div>

        </section>
      </main>
    </div>
  );
}

export default Reports;