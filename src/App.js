import React, { useState } from 'react';
import './App.css';
import Form from './Form'

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

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {

  const [teamMembers, setTeamMembers] = useState(teamList)
  const [formValues, setFormValues] = useState(initialFormValues)
   
  //useEffect to render team members
  
  return (
    <div className="App">
      <h1>Team Builder Form</h1>
      <Form />
      {/* //map through results from useEffect to render li inside ul */}
      {teamList.map((teamMember, index) => {
        return ([<h2 key={index}>{teamMember.name}</h2>,
        <p key={index}>{teamMember.role}</p>,
        <p key={index}>contact info: {teamMember.email}</p>
        ])
      })}
    </div>
  );
}

export default App;
