import { useState } from "react";
import { validateStep } from "./formValidation";

export const useFormHandler = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    requisition: {},
    jobDetails: {},
    interviewSettings: {},
  });
  const [errors, setErrors] = useState({});

  const handleChange = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  const handleNext = () => {
    const stepErrors = validateStep(step, formData);
    if (Object.keys(stepErrors).length === 0) {
      setStep(step + 1);
      setErrors({});
    } else {
      setErrors(stepErrors);
      alert(Object.values(stepErrors).join("\n"));
    }
  };

  const handlePrevious = () => setStep(step - 1);
  const handleSubmit = () => {
    const stepErrors = validateStep(step, formData);
    if (Object.keys(stepErrors).length === 0) {
      alert("Form submitted successfully!");
      setStep(1);
      setFormData({ requisition: {}, jobDetails: {}, interviewSettings: {} });
    } else {
      setErrors(stepErrors);
      alert(Object.values(stepErrors).join("\n"));
    }
  };

  return {
    step,
    formData,
    errors,
    handleChange,
    handleNext,
    handlePrevious,
    handleSubmit,
  };
};
