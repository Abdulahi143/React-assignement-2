import { useState } from 'react';
import './App.css'; // Import the CSS file

export function TakeInfo({ name, age, handleNameChange, handleAgeChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="title">React 2nd Exercise</h2>
      <input type="text" placeholder="Your name" value={name} onChange={handleNameChange} />
      <br />
      <input type="number" placeholder="Birth year" value={age} onChange={handleAgeChange} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export function ResultInfo({ name, age }) {
  const date = new Date();
  const parsedAge = parseInt(age);
  const currentYear = date.getFullYear();
  const userAge = currentYear - parsedAge;

    const isValidBirthYear = parsedAge > 1900 && parsedAge <= currentYear;
  return (
    <div className="result-container">
      {name !== "" && isValidBirthYear ? (
        <h1>Hi {name}, your age is {userAge}!</h1>
      ) : name === "" ? (
        <div className="error-container">Please enter your name!</div>
      ) : (
        <div className="error-container">Please enter a valid year of birth!</div>
      )}
    </div>
  );
}
