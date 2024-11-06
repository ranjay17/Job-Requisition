import React from "react";
import "../CSS/DraftCard.css";

const DraftCard = ({ data }) => {
  return (
    <div className="draft-card">
      <h2>Live Preview</h2>
      <p>
        <strong>Job Title:</strong> {data.requisition.jobTitle}
      </p>
      <p>
        <strong>No Of Opening:</strong> {data.requisition.opening}
      </p>
      <p>
        <strong>Gender:</strong> {data.requisition.gender}
      </p>
      <p>
        <strong>Urgency:</strong> {data.requisition.urgency}
      </p>
      <p>
        <strong>Job Title:</strong> {data.jobDetails.jobTitle}
      </p>
      <p>
        <strong>Job Details:</strong> {data.jobDetails.details}
      </p>
      <p>
        <strong>Job Location:</strong> {data.jobDetails.jobLocation}
      </p>
      <p>
        <strong>Interview Mode:</strong> {data.interviewSettings.interviewMode}
      </p>
      <p>
        <strong>Interview Duration:</strong>{" "}
        {data.interviewSettings.interviewDuration}
      </p>
      <p>
        <strong>Interview Language:</strong>{" "}
        {data.interviewSettings.interviewLanguage}
      </p>
    </div>
  );
};

export default DraftCard;
