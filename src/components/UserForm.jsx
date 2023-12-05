import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UserForm = () => {
  // const [formData, dispatch] = useReducer(formReducer, {
  //   name: '',
  //   email: '',
  // });
  const dispatch = useDispatch();
  const {name, email} = useSelector(state => state)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
        placeholder="Enter name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
        placeholder="Enter email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
