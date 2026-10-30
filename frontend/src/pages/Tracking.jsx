import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Tracking() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">

          <div className="welcome-section">
            <div>
              <h1>Asset Tracking</h1>
              <p>
                Track equipment locations and current operational status.
              </p>
            </div>

            <button className="primary-button">
              + Add Tracking
            </button>
          </div>

          {/* Tracking Statistics */}

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon equipment-icon">
                🚜
              </div>

              <div>
                <p>Total Assets</p>
                <h2>120</h2>
                <span className="positive">
                  All registered equipment
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon dispatch-icon">
                🚚
              </div>

              <div>
                <p>In Transit</p>
                <h2>12</h2>
                <span className="positive">
                  Currently moving
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon rental-icon">
                📍
              </div>

              <div>
                <p>At Construction Site</p>
                <h2>35</h2>
                <span className="positive">
                  Currently deployed
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon maintenance-icon">
                🏢
              </div>

              <div>
                <p>At Warehouse</p>
                <h2>73</h2>
                <span>
                  Available assets
                </span>
              </div>
            </div>

          </div>

          {/* Tracking Table */}

          <div className="dashboard-card equipment-table-card">

            <div className="card-header">
              <h3>Asset Location Tracking</h3>

              <button className="action-button">
                Refresh
              </button>
            </div>

            <div className="table-container">

              <table>

                <thead>
                  <tr>
                    <th>Asset ID</th>
                    <th>Equipment</th>
                    <th>Current Location</th>
                    <th>Last Updated</th>
                    <th>Operator</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>EQ-001</td>

                    <td>
                      <strong>CAT Excavator</strong>
                    </td>

                    <td>Warangal Construction Site</td>

                    <td>10 min ago</td>

                    <td>Ravi Kumar</td>

                    <td>
                      <span className="badge active">
                        At Site
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        Track
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>EQ-002</td>

                    <td>
                      <strong>JCB Loader</strong>
                    </td>

                    <td>Vijayawada → Guntur</td>

                    <td>5 min ago</td>

                    <td>Arun Kumar</td>

                    <td>
                      <span className="badge pending">
                        In Transit
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        Track
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>EQ-003</td>

                    <td>
                      <strong>Tata Crane</strong>
                    </td>

                    <td>BuildAsset Warehouse</td>

                    <td>25 min ago</td>

                    <td>Not Assigned</td>

                    <td>
                      <span className="badge completed">
                        Available
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        Track
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>EQ-004</td>

                    <td>
                      <strong>Volvo Excavator</strong>
                    </td>

                    <td>Hyderabad Construction Site</td>

                    <td>15 min ago</td>

                    <td>Prakash</td>

                    <td>
                      <span className="badge active">
                        At Site
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        Track
                      </button>
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </section>
      </main>
    </div>
  );
}

export default Tracking;