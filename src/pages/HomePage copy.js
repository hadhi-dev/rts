import React, { useState, lazy, Suspense } from 'react';
import { FaBars } from 'react-icons/fa';
import ErrorBoundary from './ErrorBoundary'; // Import your ErrorBoundary component
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const moduleConfig = {
  1: lazy(() => import('../Modules/Dashboard')),
  2: lazy(() => import('../Modules/SwingDoorWardrobe')),
  4: lazy(() => import('../Modules/UserRegistry')),
};

const HomePage = () => {
  const [selectedModuleID, setSelectedModuleID] = useState(1);
  const [menuData, setMenuData] = useState([
    {
      MenuID: 1,
      MenuName: 'Products',
      ParentRefID: null,
      IsVisible: true,
      IsSubMenu: false,
     IconName: 'icon-product',
    },
    {
      MenuID: 2,
      MenuName: 'Swing Door Wardrobe',
      ParentRefID: 1,
      IsVisible: true,
      IsSubMenu: false,
    IconName: 'icon-wardrobe'
    },
    {
      MenuID: 3,
      MenuName: 'Admin',
      ParentRefID: null,
      IsVisible: true,
      IsSubMenu: false,
    IconName: 'icon-wardrobe'
    },
    {
      MenuID: 4,
      MenuName: 'User',
      ParentRefID: 3,
      IsVisible: true,
      IsSubMenu: false,
    IconName: 'icon-wardrobe'
    },
  ]);

  const [collapsed, setCollapsed] = useState(false);

  // Function to handle menu item click
  const handleMenuItemClick = (menuID) => {
    setSelectedModuleID(menuID);
  };

  const SelectedModule = moduleConfig[selectedModuleID];

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="flex">
      
      <Sidebar collapsed={collapsed}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'lightblue' }}>
        <div>
          <FaBars size={30} onClick={toggleCollapse} style={{ cursor: 'pointer', marginLeft: '10px' }} />
        </div>
        <div>RTS CLOUD</div>
      </div>
      <Menu iconShape="square">
  {menuData.map((menuItem) => (
    menuItem.IsVisible && (
      menuItem.IsSubMenu ? (
        <SubMenu key={menuItem.MenuID} title={menuItem.MenuName}>
          {menuData
            .filter(subMenuItem => subMenuItem.ParentRefID === menuItem.MenuID)
            .map(subMenuItem => (
              <MenuItem key={subMenuItem.MenuID} onClick={() => handleMenuItemClick(subMenuItem.MenuID)}>
                <span className={`menu-icon ${subMenuItem.IconName}`}></span> {/* Render the icon */}
                {subMenuItem.MenuName}
              </MenuItem>
            ))
          }
        </SubMenu>
      ) : (
        
        <MenuItem key={menuItem.MenuID} onClick={() => handleMenuItemClick(menuItem.MenuID)}>
          <span className={`menu-icon ${menuItem.IconName}`}></span> {/* Render the icon */}
          {menuItem.MenuName}
        </MenuItem>
      )
    )
  ))}
</Menu>
      </Sidebar>
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary>
          {SelectedModule && <SelectedModule />}
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

export default HomePage;
