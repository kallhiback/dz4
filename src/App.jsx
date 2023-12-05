import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import UserFormPage from './pages/UserFormPage';
import UserDataPage from './pages/UserDataPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<UserFormPage/>} />
        <Route path="/user-data" element={<UserDataPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
