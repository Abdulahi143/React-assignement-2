import { useState } from 'react';
import './App.css'; // Import the CSS file

export function TakeInfo({ name, age, handleNameChange, handleAgeChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="title">React Layliska 2aad</h2>
      <input type="text" placeholder="Fadlan magacaaga geli" value={name} onChange={handleNameChange} />
      <br />
      <input type="number" placeholder="Fadlan da'adaada geli" value={age} onChange={handleAgeChange} />
      <br />
      <button type="submit">Gudbi</button>
    </form>
  );
}

export function ResultInfo({ name, age }) {
  const parsedAge = parseInt(age);
  
  return (
    <div className="result-container">
      {name !== "" && !isNaN(parsedAge) ? (
        parsedAge >= 18 ? (
          <h1>Magacaagu waa {name} da´daaduna waxay ka weyn tahay 18 sanno!</h1>
        ) : (
          <h1>Magacaagu waa {name} da´daaduna waxay ka yar tahay 18 sanno!</h1>
        )
      ) : name === "" ? (
        <div className='error-container'>Fadlan Magacaaga geli!</div>
      ) : (
        <div className='error-container'>Fadlan Da´daada geli!</div>
      )}
    </div>
  );
}
