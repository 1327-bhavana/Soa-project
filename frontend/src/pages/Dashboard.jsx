import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar />

        <section className="dashboard-content">

          <div className="welcome-section">
            <div>
              <h1>Good Morning, Admin 👋</h1>
              <p>
                Here's what's happening with your equipment and operations today.
              </p>
            </div>

            <button className="primary-button">
              + New Rental
            </button>
          </div>

          {/* Statistics */}

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon equipment-icon">
                🚜
              </div>

              <div>
                <p>Total Equipment</p>
                <h2>120</h2>
                <span className="positive">
                  ↑ 8% from last month
                </span>
              </div>
            </div>


            <div className="stat-card">
              <div className="stat-icon rental-icon">
                📅
              </div>

              <div>
                <p>Active Rentals</p>
                <h2>35</h2>
                <span className="positive">
                  ↑ 12% from last month
                </span>
              </div>
            </div>


            <div className="stat-card">
              <div className="stat-icon dispatch-icon">
                🚚
              </div>

              <div>
                <p>Active Dispatches</p>
                <h2>12</h2>
                <span className="positive">
                  ↑ 5% from last week
                </span>
              </div>
            </div>


            <div className="stat-card">
              <div className="stat-icon maintenance-icon">
                🔧
              </div>

              <div>
                <p>Maintenance Due</p>
                <h2>8</h2>
                <span className="warning">
                  Requires attention
                </span>
              </div>
            </div>

          </div>


          {/* Lower section */}

          <div className="dashboard-grid">

            {/* Equipment status */}

            <div className="dashboard-card">

              <div className="card-header">
                <h3>Equipment Status</h3>
                <button>View All</button>
              </div>

              <div className="status-row">
                <span>Available</span>
                <strong>65</strong>
              </div>

              <div className="progress">
                <div
                  className="progress-bar available"
                  style={{ width: "65%" }}
                ></div>
              </div>


              <div className="status-row">
                <span>Rented</span>
                <strong>35</strong>
              </div>

              <div className="progress">
                <div
                  className="progress-bar rented"
                  style={{ width: "35%" }}
                ></div>
              </div>


              <div className="status-row">
                <span>Maintenance</span>
                <strong>20</strong>
              </div>

              <div className="progress">
                <div
                  className="progress-bar maintenance"
                  style={{ width: "20%" }}
                ></div>
              </div>

            </div>


            {/* Recent rentals */}

            <div className="dashboard-card">

              <div className="card-header">
                <h3>Recent Rentals</h3>
                <button>View All</button>
              </div>

              <div className="rental-row">

                <div>
                  <strong>CAT Excavator</strong>
                  <span>ABC Constructions</span>
                </div>

                <span className="badge active">
                  Active
                </span>

              </div>


              <div className="rental-row">

                <div>
                  <strong>JCB Loader</strong>
                  <span>XYZ Builders</span>
                </div>

                <span className="badge pending">
                  Pending
                </span>

              </div>


              <div className="rental-row">

                <div>
                  <strong>Mobile Crane</strong>
                  <span>BuildPro Ltd.</span>
                </div>

                <span className="badge completed">
                  Completed
                </span>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;