import React, { useState } from 'react';
import './App.css';
import Form from './Form'

function App() {
  const [teamMembers, setTeamMembers] = useState({
    name: '',
    email: '',
    role: ''
  })
  
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
