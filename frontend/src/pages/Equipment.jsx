import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../api";

function Equipment() {

  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    model: "",
    status: "AVAILABLE",
    rentalPrice: "",
    location: "",
  });


  // Load equipment when page opens
  useEffect(() => {
    fetchEquipment();
  }, []);


  // Get all equipment
  const fetchEquipment = async () => {

    try {

      const response = await api.get("/equipment");

      setEquipment(response.data);

    } catch (error) {

      console.error("Error fetching equipment:", error);
      alert("Unable to load equipment");

    } finally {

      setLoading(false);

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


  // Add or Update equipment
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const equipmentData = {
        name: formData.name,
        type: formData.type,
        model: formData.model,
        status: formData.status,
        rentalPrice: Number(formData.rentalPrice),
        location: formData.location,
      };


      // UPDATE
      if (editingId !== null) {

        const response = await api.put(
          `/equipment/${editingId}`,
          equipmentData
        );

        setEquipment(
          equipment.map((item) =>
            item.id === editingId
              ? response.data
              : item
          )
        );

        alert("Equipment updated successfully!");

      }

      // ADD
      else {

        const response = await api.post(
          "/equipment",
          equipmentData
        );

        setEquipment([
          ...equipment,
          response.data
        ]);

        alert("Equipment added successfully!");

      }


      // Reset form
      setFormData({
        name: "",
        type: "",
        model: "",
        status: "AVAILABLE",
        rentalPrice: "",
        location: "",
      });

      setEditingId(null);
      setShowForm(false);


    } catch (error) {

      console.error("Error saving equipment:", error);

      alert("Unable to save equipment");

    }
  };


  // Open Edit form
  const handleEditEquipment = (item) => {

    setFormData({
      name: item.name,
      type: item.type,
      model: item.model,
      status: item.status,
      rentalPrice: item.rentalPrice,
      location: item.location,
    });

    setEditingId(item.id);
    setShowForm(true);

  };


  // Delete equipment
  const handleDeleteEquipment = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this equipment?"
    );

    if (!confirmDelete) {
      return;
    }


    try {

      await api.delete(`/equipment/${id}`);

      setEquipment(
        equipment.filter((item) => item.id !== id)
      );

      alert("Equipment deleted successfully!");


    } catch (error) {

      console.error("Error deleting equipment:", error);

      alert("Unable to delete equipment");

    }
  };


  // Cancel form
  const handleCancel = () => {

    setShowForm(false);
    setEditingId(null);

    setFormData({
      name: "",
      type: "",
      model: "",
      status: "AVAILABLE",
      rentalPrice: "",
      location: "",
    });

  };


  // Equipment statistics
  const totalEquipment = equipment.length;

  const availableEquipment = equipment.filter(
    (item) => item.status === "AVAILABLE"
  ).length;

  const rentedEquipment = equipment.filter(
    (item) => item.status === "RENTED"
  ).length;

  const maintenanceEquipment = equipment.filter(
    (item) => item.status === "MAINTENANCE"
  ).length;


  return (

    <div className="app-layout">

      <Sidebar />

      <main className="main-content">

        <Navbar />

        <section className="dashboard-content">


          {/* Page Header */}

          <div className="welcome-section">

            <div>

              <h1>Equipment Management</h1>

              <p>
                Manage construction equipment, availability and rental status.
              </p>

            </div>


            <button
              className="primary-button"
              onClick={() => {
                setEditingId(null);

                setFormData({
                  name: "",
                  type: "",
                  model: "",
                  status: "AVAILABLE",
                  rentalPrice: "",
                  location: "",
                });

                setShowForm(true);
              }}
            >
              + Add Equipment
            </button>

          </div>


          {/* Add / Edit Equipment Form */}

          {showForm && (

            <div className="dashboard-card equipment-form-card">

              <div className="card-header">

                <h3>
                  {editingId !== null
                    ? "Edit Equipment"
                    : "Add New Equipment"}
                </h3>


                <button
                  type="button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>

              </div>


              <form onSubmit={handleSubmit}>


                {/* Name + Type */}

                <div className="form-row">

                  <div className="form-group">

                    <label>Equipment Name</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Example: JCB Excavator"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label>Type</label>

                    <input
                      type="text"
                      name="type"
                      placeholder="Example: Excavator"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                    />

                  </div>

                </div>


                {/* Model + Status */}

                <div className="form-row">

                  <div className="form-group">

                    <label>Model</label>

                    <input
                      type="text"
                      name="model"
                      placeholder="Example: 3DX"
                      value={formData.model}
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

                      <option value="AVAILABLE">
                        AVAILABLE
                      </option>

                      <option value="RENTED">
                        RENTED
                      </option>

                      <option value="MAINTENANCE">
                        MAINTENANCE
                      </option>

                    </select>

                  </div>

                </div>


                {/* Rental Price + Location */}

                <div className="form-row">

                  <div className="form-group">

                    <label>Rental Price (per day)</label>

                    <input
                      type="number"
                      name="rentalPrice"
                      placeholder="Example: 2500"
                      value={formData.rentalPrice}
                      onChange={handleInputChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label>Location</label>

                    <input
                      type="text"
                      name="location"
                      placeholder="Example: Hyderabad"
                      value={formData.location}
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
                    ? "Update Equipment"
                    : "Save Equipment"}
                </button>


              </form>

            </div>

          )}


          {/* Equipment Statistics */}

          <div className="stats-grid">


            <div className="stat-card">

              <div className="stat-icon equipment-icon">
                🚜
              </div>

              <div>

                <p>Total Equipment</p>

                <h2>{totalEquipment}</h2>

                <span className="positive">
                  All registered assets
                </span>

              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon dispatch-icon">
                ✓
              </div>

              <div>

                <p>Available</p>

                <h2>{availableEquipment}</h2>

                <span className="positive">
                  Ready for rental
                </span>

              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon rental-icon">
                📅
              </div>

              <div>

                <p>Rented</p>

                <h2>{rentedEquipment}</h2>

                <span>
                  Currently rented
                </span>

              </div>

            </div>


            <div className="stat-card">

              <div className="stat-icon maintenance-icon">
                🔧
              </div>

              <div>

                <p>Maintenance</p>

                <h2>{maintenanceEquipment}</h2>

                <span className="warning">
                  Under maintenance
                </span>

              </div>

            </div>


          </div>


          {/* Equipment Table */}

          <div className="dashboard-card equipment-table-card">

            <div className="card-header">

              <h3>Equipment Inventory</h3>

              <button>
                Export
              </button>

            </div>


            <div className="table-container">


              {loading ? (

                <p>Loading equipment...</p>

              ) : equipment.length === 0 ? (

                <p>No equipment found.</p>

              ) : (

                <table>

                  <thead>

                    <tr>

                      <th>Equipment ID</th>
                      <th>Equipment Name</th>
                      <th>Type</th>
                      <th>Model</th>
                      <th>Location</th>
                      <th>Rental Rate</th>
                      <th>Status</th>
                      <th>Action</th>

                    </tr>

                  </thead>


                  <tbody>

                    {equipment.map((item) => (

                      <tr key={item.id}>

                        <td>
                          EQ-{String(item.id).padStart(3, "0")}
                        </td>


                        <td>
                          <strong>
                            {item.name}
                          </strong>
                        </td>


                        <td>
                          {item.type}
                        </td>


                        <td>
                          {item.model}
                        </td>


                        <td>
                          {item.location}
                        </td>


                        <td>
                          ₹{item.rentalPrice}/day
                        </td>


                        <td>

                          <span
                            className={`equipment-status ${
                              item.status === "AVAILABLE"
                                ? "available-status"
                                : item.status === "RENTED"
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
                              handleEditEquipment(item)
                            }
                          >
                            Edit
                          </button>


                          <button
                            className="action-button"
                            onClick={() =>
                              handleDeleteEquipment(item.id)
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

export default Equipment;