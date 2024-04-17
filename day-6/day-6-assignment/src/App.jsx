import React, { useState } from 'react';
import './App.css';

// UserProfile component to display user information
const UserProfile = ({ name, email, bio }) => (
  <div className="profile">
    <h2>User Profile</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Bio:</strong> {bio}</p>
  </div>
);

// EditProfile component to edit user information
const EditProfile = ({ name, email, bio, onSave }) => {
  const [formData, setFormData] = useState({ name, email, bio });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="profile">
      <h2>Edit Profile</h2>
      <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
      <label>Email: <input type="email" name="email" value={formData.email} onChange={handleChange} /></label>
      <label>Bio: <textarea name="bio" value={formData.bio} onChange={handleChange} /></label>
      <button onClick={() => onSave(formData)}>Save</button>
    </div>
  );
};

// App component
const App = () => {
  // Sample user data
  const userData = {
    name: "ramdev ",
    email: "radheshyam@.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  };

  const [isEditMode, setIsEditMode] = useState(false);

  const handleToggleMode = () => {
    setIsEditMode(prevMode => !prevMode);
  };

  const handleSave = (formData) => {
    console.log("Saving data:", formData);
  };

  return (
    <div className="App">
      <h1>User Profile App</h1>
      <button onClick={handleToggleMode}>{isEditMode ? 'View Mode' : 'Edit Mode'}</button>
      {isEditMode ? (
        <EditProfile {...userData} onSave={handleSave} />
      ) : (
        <UserProfile {...userData} />
      )}
    </div>
  );
};

export default App;
