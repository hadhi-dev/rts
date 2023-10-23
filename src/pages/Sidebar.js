import React, { useState } from 'react';

const Sidebar = ({ onMenuItemClick }) => {
  const [selectedMenuID, setSelectedMenuID] = useState(null);

  const handleMenuItemClick = (menuID) => {
    setSelectedMenuID(menuID);
    onMenuItemClick(menuID); // Pass the selected menuID to the parent component
  };

  return (
    <div className="bg-gray-300 p-4">
      <ul>
        <li onClick={() => handleMenuItemClick(1)}>Menu 1</li>
        <li onClick={() => handleMenuItemClick(2)}>Menu 2</li>
        <li onClick={() => handleMenuItemClick(3)}>Menu 3</li>
        {/* Add more menu items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
