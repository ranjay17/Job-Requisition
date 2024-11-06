import React from "react";
import "../CSS/JobDetails.css";

const JobDetails = ({ data, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="form-step">
      <h2>Job Details</h2>
      <label>
        Job Title:
        <input
          name="jobTitle"
          required
          value={data.jobTitle || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Job Details:
        <textarea
          type="text"
          name="details"
          required
          value={data.details || ""}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Job Location:
        <input
          name="jobLocation"
          required
          value={data.jobLocation || ""}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};

export default JobDetails;
