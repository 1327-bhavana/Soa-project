import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../api";

function Rentals() {

  const [rentals, setRentals] = useState([]);
  const [equipment, setEquipment] = useState([]);

  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    equipmentId: "",
    customerName: "",
    customerEmail: "",
    startDate: "",
    endDate: "",
    totalAmount: "",
    status: "ACTIVE",
  });


  // Load rentals and equipment
  useEffect(() => {
    fetchRentals();
    fetchEquipment();
  }, []);


  // Get all rentals
  const fetchRentals = async () => {

    try {

      const response = await api.get("/rentals");

      setRentals(response.data);

    } catch (error) {

      console.error("Error fetching rentals:", error);
      alert("Unable to load rentals");

    } finally {

      setLoading(false);

    }
  };


  // Get equipment
  const fetchEquipment = async () => {

    try {

      const response = await api.get("/equipment");

      setEquipment(response.data);

    } catch (error) {

      console.error("Error fetching equipment:", error);

    }
  };


  // Handle form input
  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // Add or update rental
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const rentalData = {
        equipmentId: Number(formData.equipmentId),
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        startDate: formData.startDate,
        endDate: formData.endDate,
        totalAmount: Number(formData.totalAmount),
        status: formData.status,
      };


      // UPDATE
      if (editingId !== null) {

        const response = await api.put(
          `/rentals/${editingId}`,
          rentalData
        );

        setRentals(
          rentals.map((item) =>
            item.id === editingId
              ? response.data
              : item
          )
        );

        alert("Rental updated successfully!");

      }

      // CREATE
      else {

        const response = await api.post(
          "/rentals",
          rentalData
        );

        setRentals([
          ...rentals,
          response.data
        ]);

        alert("Rental created successfully!");

      }


      resetForm();

    } catch (error) {

      console.error("Error saving rental:", error);

      alert("Unable to save rental");

    }
  };


  // Edit rental
  const handleEditRental = (rental) => {

    setFormData({
      equipmentId: rental.equipmentId,
      customerName: rental.customerName,
      customerEmail: rental.customerEmail,
      startDate: rental.startDate,
      endDate: rental.endDate,
      totalAmount: rental.totalAmount,
      status: rental.status,
    });

    setEditingId(rental.id);
    setShowForm(true);

  };


  // Delete rental
  const handleDeleteRental = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this rental?"
    );

    if (!confirmDelete) {
      return;
    }


    try {

      await api.delete(`/rentals/${id}`);

      setRentals(
        rentals.filter((item) => item.id !== id)
      );

      alert("Rental deleted successfully!");

    } catch (error) {

      console.error("Error deleting rental:", error);

      alert("Unable to delete rental");

    }
  };


  // Reset form
  const resetForm = () => {

    setFormData({
      equipmentId: "",
      customerName: "",
      customerEmail: "",
      startDate: "",
      endDate: "",
      totalAmount: "",
      status: "ACTIVE",
    });

    setEditingId(null);
    setShowForm(false);

  };


  // Rental statistics
  const totalRentals = rentals.length;

  const activeRentals = rentals.filter(
    (item) => item.status === "ACTIVE"
  ).length;

  const completedRentals = rentals.filter(
    (item) => item.status === "COMPLETED"
  ).length;

  const cancelledRentals = rentals.filter(
    (item) => item.status === "CANCELLED"
  ).length;


  // Get equipment name
  const getEquipmentName = (equipmentId) => {

    const item = equipment.find(
      (equipmentItem) =>
        equipmentItem.id === equipmentId
    );

    return item
      ? item.name
      : `Equipment #${equipmentId}`;
  };


  return (

    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar />

        <section className="dashboard-content">


          {/* Page Header */}

          <div className="welcome-section">

            <div>

              <h1>Rental Management</h1>

              <p>
                Manage equipment rentals, customers and rental periods.
              </p>

            </div>


            <button
              className="primary-button"
              onClick={() => {
                setEditingId(null);

                setFormData({
                  equipmentId: "",
                  customerName: "",
                  customerEmail: "",
                  startDate: "",
                  endDate: "",
                  totalAmount: "",
                  status: "ACTIVE",
                });

                setShowForm(true);
              }}
            >
              + Create Rental
            </button>

          </div>


          {/* Add / Edit Rental Form */}

          {showForm && (

            <div className="dashboard-card equipment-form-card">

              <div className="card-header">

                <h3>
                  {editingId !== null
                    ? "Edit Rental"
                    : "Create New Rental"}
                </h3>


                <button
                  type="button"
                  onClick={resetForm}
                >
                  Cancel
                </button>

              </div>


              <form onSubmit={handleSubmit}>


                {/* Equipment */}

                <div className="form-row">

                  <div className="form-group">

                    <label>Equipment</label>

                    <select
                      name="equipmentId"
                      value={formData.equipmentId}
                      onChange={handleInputChange}
                      required
                    >

                      <option value="">
                        Select Equipment
                      </option>

                      {equipment.map((item) => (

                        <option
                          key={item.id}
                          value={item.id}
                        >
                          {item.name} - {item.model}
                        </option>

                      ))}

                    </select>

                  </div>


                  <div className="form-group">

                    <label>Customer Name</label>

                    <input
                      type="text"
                      name="customerName"
                      placeholder="Example: ABC Constructions"
                      value={formData.customerName}
                      onChange={handleInputChange}
                      required
                    />

                  </div>

                </div>


                {/* Customer Email + Status */}

                <div className="form-row">

                  <div className="form-group">

                    <label>Customer Email</label>

                    <input
                      type="email"
                      name="customerEmail"
                      placeholder="Example: abc@gmail.com"
                      value={formData.customerEmail}
                      onChange={handleInputChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label>Status</label>

                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                    >

                      <option value="ACTIVE">
                        ACTIVE
                      </option>

                      <option value="COMPLETED">
                        COMPLETED
                      </option>

                      <option value="CANCELLED">
                        CANCELLED
                      </option>

                    </select>

                  </div>

                </div>


                {/* Start Date + End Date */}

                <div className="form-row">

                  <div className="form-group">

                    <label>Start Date</label>

                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label>End Date</label>

                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleInputChange}
                      required
                    />

                  </div>

                </div>


                {/* Total Amount */}

                <div className="form-row">

                  <div className="form-group">

                    <label>Total Rental Amount</label>

                    <input
                      type="number"
                      name="totalAmount"
                      placeholder="Example: 15000"
                      value={formData.totalAmount}
                      onChange={handleInputChange}
                      required
                    />

                  </div>

                </div>


                <button
                  type="submit"
                  className="primary-button"
                >
                  {editingId !== null
                    ? "Update Rental"
                    : "Create Rental"}
                </button>

              </form>

            </div>

          )}


          {/* Rental Statistics */}

          <div className="stats-grid">


            <div className="stat-card">

              <div className="stat-icon rental-icon">
                📅
              </div>

              <div>

                <p>Total Rentals</p>

                <h2>{totalRentals}</h2>

                <span>
                  All rental records
                </span>

              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon dispatch-icon">
                ✓
              </div>

              <div>

                <p>Active</p>

                <h2>{activeRentals}</h2>

                <span className="positive">
                  Currently active
                </span>

              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon equipment-icon">
                ✔
              </div>

              <div>

                <p>Completed</p>

                <h2>{completedRentals}</h2>

                <span>
                  Finished rentals
                </span>

              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon maintenance-icon">
                ✕
              </div>

              <div>

                <p>Cancelled</p>

                <h2>{cancelledRentals}</h2>

                <span className="warning">
                  Cancelled rentals
                </span>

              </div>

            </div>


          </div>


          {/* Rental Table */}

          <div className="dashboard-card equipment-table-card">

            <div className="card-header">

              <h3>Rental Records</h3>

              <button>
                Export
              </button>

            </div>


            <div className="table-container">


              {loading ? (

                <p>Loading rentals...</p>

              ) : rentals.length === 0 ? (

                <p>No rental records found.</p>

              ) : (

                <table>

                  <thead>

                    <tr>

                      <th>Rental ID</th>
                      <th>Equipment</th>
                      <th>Customer</th>
                      <th>Email</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Total Amount</th>
                      <th>Status</th>
                      <th>Action</th>

                    </tr>

                  </thead>


                  <tbody>

                    {rentals.map((item) => (

                      <tr key={item.id}>

                        <td>
                          REN-{String(item.id).padStart(3, "0")}
                        </td>


                        <td>
                          <strong>
                            {getEquipmentName(item.equipmentId)}
                          </strong>
                        </td>


                        <td>
                          {item.customerName}
                        </td>


                        <td>
                          {item.customerEmail}
                        </td>


                        <td>
                          {item.startDate}
                        </td>


                        <td>
                          {item.endDate}
                        </td>


                        <td>
                          ₹{item.totalAmount}
                        </td>


                        <td>

                          <span
                            className={`equipment-status ${
                              item.status === "ACTIVE"
                                ? "available-status"
                                : item.status === "COMPLETED"
                                ? "rented-status"
                                : "maintenance-status"
                            }`}
                          >
                            {item.status}
                          </span>

                        </td>


                        <td>

                          <button
                            className="action-button"
                            onClick={() =>
                              handleEditRental(item)
                            }
                          >
                            Edit
                          </button>


                          <button
                            className="action-button"
                            onClick={() =>
                              handleDeleteRental(item.id)
                            }
                            style={{
                              marginLeft: "8px"
                            }}
                          >
                            Delete
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              )}

            </div>

          </div>


        </section>

      </main>

    </div>

  );
}

export default Rentals;