import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function RentalCalendar() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Navbar />

        <section className="dashboard-content">

          <div className="welcome-section">
            <div>
              <h1>Rental Calendar</h1>
              <p>
                View equipment rental schedules and availability.
              </p>
            </div>

            <button className="primary-button">
              + New Rental
            </button>
          </div>

          {/* Calendar Header */}

          <div className="dashboard-card calendar-card">

            <div className="calendar-header">
              <button className="calendar-button">
                ←
              </button>

              <h2>September 2026</h2>

              <button className="calendar-button">
                →
              </button>
            </div>

            {/* Week Days */}

            <div className="calendar-week">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>

            {/* Calendar Days */}

            <div className="calendar-grid">

              <div className="calendar-day empty"></div>
              <div className="calendar-day empty"></div>
              <div className="calendar-day">
                <span>1</span>
              </div>
              <div className="calendar-day">
                <span>2</span>
              </div>
              <div className="calendar-day">
                <span>3</span>
              </div>
              <div className="calendar-day">
                <span>4</span>
              </div>
              <div className="calendar-day">
                <span>5</span>
              </div>

              <div className="calendar-day">
                <span>6</span>
              </div>
              <div className="calendar-day">
                <span>7</span>
              </div>
              <div className="calendar-day">
                <span>8</span>
              </div>
              <div className="calendar-day">
                <span>9</span>
              </div>
              <div className="calendar-day">
                <span>10</span>
              </div>
              <div className="calendar-day">
                <span>11</span>
              </div>
              <div className="calendar-day">
                <span>12</span>
              </div>

              <div className="calendar-day">
                <span>13</span>
              </div>
              <div className="calendar-day">
                <span>14</span>
              </div>
              <div className="calendar-day">
                <span>15</span>
              </div>
              <div className="calendar-day">
                <span>16</span>
              </div>
              <div className="calendar-day">
                <span>17</span>
              </div>
              <div className="calendar-day">
                <span>18</span>
              </div>
              <div className="calendar-day">
                <span>19</span>
              </div>

              <div className="calendar-day">
                <span>20</span>

                <div className="calendar-event active-event">
                  CAT Excavator
                </div>
              </div>

              <div className="calendar-day">
                <span>21</span>

                <div className="calendar-event active-event">
                  Volvo Excavator
                </div>
              </div>

              <div className="calendar-day">
                <span>22</span>

                <div className="calendar-event pending-event">
                  JCB Loader
                </div>
              </div>

              <div className="calendar-day">
                <span>23</span>
              </div>

              <div className="calendar-day">
                <span>24</span>
              </div>

              <div className="calendar-day">
                <span>25</span>
              </div>

              <div className="calendar-day">
                <span>26</span>
              </div>

              <div className="calendar-day">
                <span>27</span>
              </div>
              <div className="calendar-day">
                <span>28</span>
              </div>
              <div className="calendar-day">
                <span>29</span>
              </div>
              <div className="calendar-day">
                <span>30</span>
              </div>

            </div>

          </div>

          {/* Legend */}

          <div className="dashboard-card calendar-legend">

            <h3>Rental Status</h3>

            <div className="legend-items">

              <div>
                <span className="legend-dot active-dot"></span>
                Active Rental
              </div>

              <div>
                <span className="legend-dot pending-dot"></span>
                Pending Rental
              </div>

            </div>

          </div>

        </section>
      </main>
    </div>
  );
}

export default RentalCalendar;