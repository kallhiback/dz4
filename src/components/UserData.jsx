import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';

const UserData = () => {
  const {name, email} = useSelector(state => state)
  return (
    <div>
      <h2>User Data</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
};

export default UserData;
