import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNewPage from './pages/AddNewPage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import './App.css';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', age: 28, position: 'Developer' },
    { id: 2, name: 'Jane Smith', age: 34, position: 'Designer' },
    { id: 3, name: 'Mike Johnson', age: 45, position: 'Manager' },
  ]);

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    setIsAuth(auth === 'true');
  }, []);

  const addUser = (user) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    setIsAuth(false);
    window.location.replace('/login');
  };

  return (
    <Router>
      {isAuth && (
        <div className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/add">Add New</Link>
          <Link to="/search">Search</Link>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      )}
      <Routes>
        <Route path="/" element={isAuth ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/add" element={isAuth ? <AddNewPage addUser={addUser} users={users} /> : <Navigate to="/login" />} />
        <Route path="/search" element={isAuth ? <SearchPage users={users} /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
};

export default App;
