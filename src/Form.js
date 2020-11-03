import React, { useState } from 'react';


const Form = (props) => {

const [teammate, setTeammate] = useState({
  name: '',
  email: '',
  role: ''
})

const { teamMembers, setTeamMembers } = props

  //handleChanges
  const handleChanges = (event) => {
    setTeammate({ ...teammate,[event.target.name]: event.target.value })
  }
  console.log(teamMembers)

  //submitForm
  const submitForm = (event) => {
    event.preventDefault()
    const newTeammate = {
          id: Date.now(),
          name: teammate.name,
          role: teammate.role,
          email: teammate.email
        }
    setTeamMembers([...teamMembers, newTeammate])
    setTeammate({
      name: '',
      email: '',
      role: ''
    })
  }
  //clear input fields after submit

  return (
    <form onSubmit={submitForm}>
      <div>
      <label htmlFor="name">Name     </label>
      <input 
      id="name"
      name="name"
      type="text"
      placeholder="Enter Name"
      value={teammate.name}
      onChange={handleChanges}
      required
      />
      </div>
      <div>
      <label htmlFor="role">Role     </label>
      <input 
      id="role"
      name="role"
      type="text"
      placeholder="Enter Roll"
      value={teammate.role}
      onChange={handleChanges}
      required
      />
      </div>
      <div>
      <label htmlFor="email">Email     </label>
      <input 
      id="email"
      name="email"
      type="email"
      placeholder="Enter Email"
      value={teammate.email}
      onChange={handleChanges}
      required
      />
      </div>

      <button type="submit">Submit</button>

    </form>
  )
}

export default Form;