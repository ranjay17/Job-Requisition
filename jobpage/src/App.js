import "./App.css";
import { useFormHandler } from "./utils/useFormHandler";
import RequisitionDetails from "./component/RequisitionDetails";
import JobDetails from "./component/JobDetails";
import InterviewSettings from "./component/InterviewSettings";
import DraftCard from "./component/DraftCard";
import Navigation from "./component/Navigation";

function App() {
  const {
    step,
    formData,
    handleChange,
    handleNext,
    handlePrevious,
    handleSubmit,
  } = useFormHandler();

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <RequisitionDetails
            data={formData.requisition}
            onChange={(data) => handleChange("requisition", data)}
          />
        );
      case 2:
        return (
          <JobDetails
            data={formData.jobDetails}
            onChange={(data) => handleChange("jobDetails", data)}
          />
        );
      case 3:
        return (
          <InterviewSettings
            data={formData.interviewSettings}
            onChange={(data) => handleChange("interviewSettings", data)}
            onSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <h1>Create Candidate Requisition</h1>
      <div className="form-section">
        {renderStep()}
        <Navigation
          step={step}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
      <DraftCard data={formData} />
    </div>
  );
}

export default App;
