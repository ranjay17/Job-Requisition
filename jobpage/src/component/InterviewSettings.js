import React from "react";
import "../CSS/InterviewSettings.css";

const InterviewSettings = ({ data, onChange, onSubmit }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="form-step">
      <h2>Interview Settings</h2>
      <label>
        Interview Mode:
        <select
          name="interviewMode"
          value={data.interviewMode || ""}
          onChange={handleInputChange}
        >
          <option value="">Select Mode</option>
          <option value="online">Online</option>
          <option value="in-person">Offline</option>
        </select>
      </label>
      <label>
        Interview Duration:
        <select
          name="interviewDuration"
          value={data.interviewDuration || ""}
          onChange={handleInputChange}
        >
          <option value="">Select Duration</option>
          <option value="30Min">30 Min</option>
          <option value="60Min">60 Min</option>
        </select>
      </label>
      <label>
        Interview Language:
        <select
          name="interviewLanguage"
          value={data.interviewLanguage || ""}
          onChange={handleInputChange}
        >
          <option value="">Select Language</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </label>
      <button type="button" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default InterviewSettings;
