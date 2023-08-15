// UserRegistration.js
import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* ... form inputs (username, email, password) */}
                            <div>   
                                <label>Username</label>
                                <input type="text" name="username" value={formData.username} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                            </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
