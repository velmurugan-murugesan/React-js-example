import React, { useReducer, useState } from 'react';

// Initial state for the form
const initialState = {
  name: '',
  email: '',
  street: '',
  city: '',
};

// Reducer function to handle state updates
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_STREET':
      return { ...state, street: action.payload };
    case 'SET_CITY':
      return { ...state, city: action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', state);
    // Reset form after submission
    dispatch({ type: 'RESET' });
    setStep(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <h2>Step 1: Personal Information</h2>
          <label>
            Name:
            <input
              type="text"
              value={state.name}
              onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={state.email}
              onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
              required
            />
          </label>
          <br />
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
      
      {step === 2 && (
        <div>
          <h2>Step 2: Address Details</h2>
          <label>
            Street:
            <input
              type="text"
              value={state.street}
              onChange={(e) => dispatch({ type: 'SET_STREET', payload: e.target.value })}
              required
            />
          </label>
          <br />
          <label>
            City:
            <input
              type="text"
              value={state.city}
              onChange={(e) => dispatch({ type: 'SET_CITY', payload: e.target.value })}
              required
            />
          </label>
          <br />
          <button type="button" onClick={handleBack}>
            Back
          </button>
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default MultiStepForm;
