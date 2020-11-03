import React, { useState } from 'react';
import './App.css';
import Form from './Form';

const teamList = [
  {
    name: 'Clare Jackson',
    email: 'clare.jackson@team.com',
    role: 'Lead Developer'
  },
  {
    name: 'Danielle Koduru',
    email: 'danielle.koduru@team.com',
    role: 'Lead Developer'
  },
  {
    name: 'Barbara Moore',
    email: 'barbara.moore@team.com',
    role: 'CEO'
  }
]


function App() {

  const [teamMembers, setTeamMembers] = useState(teamList)
   
 
  
  
  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <Form teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      
      {teamMembers.map((teamMember, index) => {
        return <div key={index}><h2>{teamMember.name}</h2>
        <p>{teamMember.role}</p>
        <p>contact info: {teamMember.email}</p></div>
      })}
    </div>
  );
}

export default App;
