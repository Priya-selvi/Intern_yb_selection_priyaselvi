import React, { useState } from "react";

export default function Edit({ data, onSave }) {
  // Local copy of details for editing
  const [formData, setFormData] = useState({ ...data });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <h1>Edit Details</h1>

      <div className="about-card" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input-box"
        />

        <label>Department:</label>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="input-box"
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="input-box"
        />

        <label>Year:</label>
        <input
          type="text"
          name="year"
          value={formData.year}
          onChange={handleChange}
          className="input-box"
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input-box"
        />

        <button
          onClick={() => onSave(formData)}
          className="save-btn"
          style={{ alignSelf: "flex-start", marginTop: "10px" }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
