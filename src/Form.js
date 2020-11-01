import React from 'react';


const Form = (props) => {

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input 
      id="name"
      name="name"
      type="text"
      placeholder="Enter Name"
      />

      <label htmlFor="email">Email</label>
      <input 
      id="email"
      name="email"
      type="email"
      placeholder="Enter Email"
      />

<label htmlFor="role">Role</label>
      <input 
      id="role"
      name="role"
      type="text"
      placeholder="Enter Roll"
      />
    </form>
  )
}

export default Form;