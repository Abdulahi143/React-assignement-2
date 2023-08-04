import React from 'react';
import ReactDOM from 'react-dom';
import { TakeInfo, ResultInfo } from './App.jsx';

const App = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setSubmitted(false); // Reset 'submitted' to false when the name changes
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
    setSubmitted(false); // Reset 'submitted' to false when the age changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <React.StrictMode>
      <TakeInfo
        name={name}
        age={age}
        handleNameChange={handleNameChange}
        handleAgeChange={handleAgeChange}
        handleSubmit={handleSubmit}
      />
      <br />
      {submitted && <ResultInfo name={name} age={age} />}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
