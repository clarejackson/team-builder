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

  // const addNewMember = (member) => {
  //   const newMember = {
  //     id: Date.now(),
  //     name: member.name,
  //     role: member.role,
  //     email: member.email
  //   }
  // }

  //submitForm
  const submitForm = (event) => {
    event.preventDefault()
    setTeammate({
          id: Date.now(),
          name: teamMembers.name,
          role: teamMembers.role,
          email: teamMembers.email
        })
    setTeamMembers([...teamMembers, teammate])
  }

  return (
    <form onSubmit={submitForm}>
      <div>
      <label htmlFor="name">Name     </label>
      <input 
      id="name"
      name="name"
      type="text"
      placeholder="Enter Name"
      value={teamMembers.name}
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
      value={teamMembers.role}
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
      value={teamMembers.email}
      onChange={handleChanges}
      required
      />
      </div>

      <button type="submit">Submit</button>

    </form>
  )
}

export default Form;