import React from "react";
import "../CSS/RequisitionDetails.css";

const RequisitionDetails = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="form-step">
      <h2>Requisition Details</h2>
      <label>
        Requisition Title:
        <input
          type="text"
          name="jobTitle"
          required
          value={data.jobTitle || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        No of openings:
        <input
          type="number"
          name="opening"
          required
          value={data.opening || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Gender:
        <select
          name="gender"
          required
          value={data.gender || ""}
          onChange={handleInputChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label>
        Urgency:
        <select
          name="urgency"
          required
          value={data.urgency || ""}
          onChange={handleInputChange}
        >
          <option value="">Select Urgency</option>
          <option value="Imemediate">Imemediate</option>
          <option value="Female">15days</option>
        </select>
      </label>
    </div>
  );
};

export default RequisitionDetails;
