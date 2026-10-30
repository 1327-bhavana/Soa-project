import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dispatch() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">

          <div className="welcome-section">
            <div>
              <h1>Dispatch Management</h1>
              <p>
                Manage equipment transportation and delivery operations.
              </p>
            </div>

            <button className="primary-button">
              + New Dispatch
            </button>
          </div>

          {/* Dispatch Statistics */}

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon dispatch-icon">
                🚚
              </div>

              <div>
                <p>Total Dispatches</p>
                <h2>42</h2>
                <span className="positive">
                  ↑ 8% this month
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon equipment-icon">
                🚜
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
                ⏳
              </div>

              <div>
                <p>Pending</p>
                <h2>7</h2>
                <span className="warning">
                  Awaiting dispatch
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon maintenance-icon">
                ✓
              </div>

              <div>
                <p>Delivered</p>
                <h2>23</h2>
                <span className="positive">
                  Successfully delivered
                </span>
              </div>
            </div>

          </div>

          {/* Dispatch Table */}

          <div className="dashboard-card equipment-table-card">

            <div className="card-header">
              <h3>Dispatch Records</h3>

              <button className="action-button">
                Export
              </button>
            </div>

            <div className="table-container">

              <table>

                <thead>
                  <tr>
                    <th>Dispatch ID</th>
                    <th>Equipment</th>
                    <th>Contractor</th>
                    <th>Pickup</th>
                    <th>Delivery</th>
                    <th>Driver</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>DSP-001</td>

                    <td>
                      <strong>CAT Excavator</strong>
                    </td>

                    <td>ABC Constructions</td>

                    <td>Hyderabad</td>

                    <td>Warangal</td>

                    <td>Ravi Kumar</td>

                    <td>
                      <span className="badge active">
                        In Transit
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        View
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>DSP-002</td>

                    <td>
                      <strong>JCB Loader</strong>
                    </td>

                    <td>XYZ Builders</td>

                    <td>Vijayawada</td>

                    <td>Guntur</td>

                    <td>Arun Kumar</td>

                    <td>
                      <span className="badge pending">
                        Pending
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        View
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>DSP-003</td>

                    <td>
                      <strong>Tata Crane</strong>
                    </td>

                    <td>BuildPro Ltd.</td>

                    <td>Chennai</td>

                    <td>Nellore</td>

                    <td>Suresh</td>

                    <td>
                      <span className="badge completed">
                        Delivered
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        View
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>DSP-004</td>

                    <td>
                      <strong>Volvo Excavator</strong>
                    </td>

                    <td>Metro Constructions</td>

                    <td>Bangalore</td>

                    <td>Hyderabad</td>

                    <td>Prakash</td>

                    <td>
                      <span className="badge active">
                        In Transit
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        View
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

export default Dispatch;