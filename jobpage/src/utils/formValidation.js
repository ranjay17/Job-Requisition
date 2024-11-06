export const validateStep = (step, formData) => {
  const errors = {};

  if (step === 1) {
    if (!formData.requisition.jobTitle) {
      errors.jobTitle = "Job Title is required";
    }
    if (!formData.requisition.opening) {
      errors.opening = "No of openings is required";
    }
    if (!formData.requisition.gender) {
      errors.gender = "Gender is required";
    }
    if (!formData.requisition.urgency) {
      errors.urgency = "Urgency is required";
    }
  }

  if (step === 2) {
    if (!formData.jobDetails.jobTitle) {
      errors.jobTitle = "Job Title is required";
    }
    if (!formData.jobDetails.details) {
      errors.details = "Job Details are required";
    }
    if (!formData.jobDetails.jobLocation) {
      errors.jobLocation = "Job Location is required";
    }
  }

  if (step === 3) {
    if (!formData.interviewSettings.interviewMode) {
      errors.interviewMode = "Interview Mode is required";
    }
    if (!formData.interviewSettings.interviewDuration) {
      errors.interviewDuration = "Interview Duration is required";
    }
    if (!formData.interviewSettings.interviewLanguage) {
      errors.interviewLanguage = "Interview Language is required";
    }
  }

  return errors;
};
