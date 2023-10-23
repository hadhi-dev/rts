import React from 'react';
import { logout } from '../Functions/authUtils';

const Navbar = () => {
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-gray-200 p-4">
      <div>
        <span>Welcome, User</span>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
