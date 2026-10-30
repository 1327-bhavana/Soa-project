import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Maintenance() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">

          <div className="welcome-section">
            <div>
              <h1>Maintenance Management</h1>
              <p>
                Manage equipment maintenance, service schedules and repairs.
              </p>
            </div>

            <button className="primary-button">
              + Schedule Maintenance
            </button>
          </div>

          {/* Maintenance Statistics */}

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon maintenance-icon">
                🔧
              </div>

              <div>
                <p>Total Maintenance</p>
                <h2>28</h2>
                <span>
                  This month
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon dispatch-icon">
                ⚠️
              </div>

              <div>
                <p>Maintenance Due</p>
                <h2>8</h2>
                <span className="warning">
                  Requires attention
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon rental-icon">
                🔄
              </div>

              <div>
                <p>In Progress</p>
                <h2>5</h2>
                <span className="positive">
                  Currently servicing
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon equipment-icon">
                ✓
              </div>

              <div>
                <p>Completed</p>
                <h2>15</h2>
                <span className="positive">
                  Successfully completed
                </span>
              </div>
            </div>

          </div>

          {/* Maintenance Table */}

          <div className="dashboard-card equipment-table-card">

            <div className="card-header">
              <h3>Maintenance Records</h3>

              <button className="action-button">
                Export
              </button>
            </div>

            <div className="table-container">

              <table>

                <thead>
                  <tr>
                    <th>Maintenance ID</th>
                    <th>Equipment</th>
                    <th>Type</th>
                    <th>Due Date</th>
                    <th>Technician</th>
                    <th>Cost</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>MNT-001</td>

                    <td>
                      <strong>CAT Excavator</strong>
                    </td>

                    <td>Regular Service</td>

                    <td>24 Sep 2026</td>

                    <td>Ramesh</td>

                    <td>₹8,500</td>

                    <td>
                      <span className="badge pending">
                        Due
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        View
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>MNT-002</td>

                    <td>
                      <strong>JCB Loader</strong>
                    </td>

                    <td>Engine Repair</td>

                    <td>22 Sep 2026</td>

                    <td>Mahesh</td>

                    <td>₹15,000</td>

                    <td>
                      <span className="badge active">
                        In Progress
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        View
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>MNT-003</td>

                    <td>
                      <strong>Tata Crane</strong>
                    </td>

                    <td>Oil Change</td>

                    <td>18 Sep 2026</td>

                    <td>Vijay</td>

                    <td>₹5,000</td>

                    <td>
                      <span className="badge completed">
                        Completed
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        View
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>MNT-004</td>

                    <td>
                      <strong>Volvo Excavator</strong>
                    </td>

                    <td>Hydraulic Service</td>

                    <td>28 Sep 2026</td>

                    <td>Ramesh</td>

                    <td>₹12,000</td>

                    <td>
                      <span className="badge pending">
                        Scheduled
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

export default Maintenance;