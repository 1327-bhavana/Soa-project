import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Contractors() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">

          <div className="welcome-section">
            <div>
              <h1>Contractor Management</h1>
              <p>
                Manage contractors, contact information and rental activity.
              </p>
            </div>

            <button className="primary-button">
              + Add Contractor
            </button>
          </div>

          {/* Contractor Statistics */}

          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon equipment-icon">
                👷
              </div>

              <div>
                <p>Total Contractors</p>
                <h2>64</h2>
                <span className="positive">
                  Registered contractors
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon rental-icon">
                📅
              </div>

              <div>
                <p>Active Contractors</p>
                <h2>38</h2>
                <span className="positive">
                  Currently renting
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon dispatch-icon">
                🚜
              </div>

              <div>
                <p>Active Rentals</p>
                <h2>35</h2>
                <span>
                  Equipment in use
                </span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon maintenance-icon">
                ✓
              </div>

              <div>
                <p>Completed Projects</p>
                <h2>92</h2>
                <span className="positive">
                  Successfully completed
                </span>
              </div>
            </div>

          </div>

          {/* Contractor Table */}

          <div className="dashboard-card equipment-table-card">

            <div className="card-header">
              <h3>Contractor Records</h3>

              <button className="action-button">
                Export
              </button>
            </div>

            <div className="table-container">

              <table>

                <thead>
                  <tr>
                    <th>Contractor ID</th>
                    <th>Company Name</th>
                    <th>Contact Person</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Active Rentals</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>CON-001</td>

                    <td>
                      <strong>ABC Constructions</strong>
                    </td>

                    <td>Rajesh Kumar</td>

                    <td>9876543210</td>

                    <td>abc@example.com</td>

                    <td>4</td>

                    <td>
                      <span className="badge active">
                        Active
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        View
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>CON-002</td>

                    <td>
                      <strong>XYZ Builders</strong>
                    </td>

                    <td>Suresh Reddy</td>

                    <td>9876543211</td>

                    <td>xyz@example.com</td>

                    <td>2</td>

                    <td>
                      <span className="badge active">
                        Active
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        View
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>CON-003</td>

                    <td>
                      <strong>BuildPro Ltd.</strong>
                    </td>

                    <td>Arun Sharma</td>

                    <td>9876543212</td>

                    <td>buildpro@example.com</td>

                    <td>0</td>

                    <td>
                      <span className="badge completed">
                        Inactive
                      </span>
                    </td>

                    <td>
                      <button className="action-button">
                        View
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td>CON-004</td>

                    <td>
                      <strong>Metro Constructions</strong>
                    </td>

                    <td>Vijay Kumar</td>

                    <td>9876543213</td>

                    <td>metro@example.com</td>

                    <td>3</td>

                    <td>
                      <span className="badge active">
                        Active
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

export default Contractors;