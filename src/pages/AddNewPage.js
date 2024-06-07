import React, { useState } from 'react';

const AddNewPage = ({ addUser, users }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Check if the user already exists
      const userExists = users.some(user => user.name.toLowerCase() === name.toLowerCase());
      if (userExists) {
        alert('User already exists');
        return;
      }

      // Add the new user
      addUser({ name, age, position });
      alert('User successfully added');
      setName('');
      setAge('');
      setPosition('');
    } catch (error) {
      alert('Error: Please try again or contact administrator');
    }
  };

  return (
    <div className="container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddNewPage;
