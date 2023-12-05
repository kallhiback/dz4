import React, { useState } from 'react';
import UserData from '../components/UserData';

const UserDataPage = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  const handleFormSubmit = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <h1>User Data</h1>
      <UserData {...userData} />
    </div>
  );
};

export default UserDataPage;
