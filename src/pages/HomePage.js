import React, { useState, Suspense,useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Loading from '../Components/Loading';
import { config } from '../config';
import { moduleConfig } from './moduleConfig';
import { menuData } from '../data/menuData';

const HomePage = (props) => {
  const [loading, setLoading] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(200);
  const [selectedModuleID, setSelectedModuleID] = useState(1);
  const SelectedModule = moduleConfig[selectedModuleID];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [webOpen, setWebOpen] = useState(true);
  const { window } = props;

  const container = window !== undefined ? () => window().document.body : undefined;
  useEffect(() => {
    setDrawerWidth(webOpen?200:74)
  }, [webOpen])
  
  const handleMenuItemClick = (menuID) => {
    setSelectedModuleID(menuID);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleWebDrawerToggle = () => {
    setWebOpen(!webOpen);
  };


  const drawer = (
    <div >
  <Toolbar  sx={{ minHeight: '50px',maxHeight:'50px', backgroundColor: '#FFFFFF' }} >
  <IconButton
  color="inherit"
  aria-label="open drawer"
  edge="start"
  onClick={handleWebDrawerToggle}
  sx={{ display: { xs: 'none', md: 'block' } }}
>
  <span className="material-icons">
    {webOpen ? 'keyboard_double_arrow_left' : 'keyboard_double_arrow_right'}
  </span>
</IconButton>
  {webOpen && (
    <div className="flex items-center">
      <img
        src={`${config.IMAGE_URL}branding/logo1.png`}
        alt="Logo"
        className="h-8 w-auto pl-2"
      />
    </div>)
  }
</Toolbar>
      <Divider />
      <List>
        {menuData.map((menuItem) => (
          <ListItem
            key={menuItem.MenuID}
            disablePadding
            onClick={() => handleMenuItemClick(menuItem.MenuID)}
            
          >
            <ListItemButton>
              <ListItemIcon>
                <span
                  className={`material-icons ${
                    selectedModuleID === menuItem.MenuID
                      ? 'bg-blue-200 text-blue-600 rounded-md p-1'
                      : ''
                  }`}
                >
                  {menuItem.IconName}
                </span>
              </ListItemIcon>
              {webOpen && <ListItemText
                primary={menuItem.MenuName}
                className={`${selectedModuleID === menuItem.MenuID ? 'text-blue-600' : 'text-gray-700'}`}
              />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );  

  return (
    <>
    {loading && <Loading/>}
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
  position="fixed"
  sx={{
    backgroundColor: '#FFFFFF',
    boxShadow: 'none',
    overflow:'hidden',
    borderBottom: '1px solid #ccc',
    width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` },
  }}
>
  <Toolbar>
    <IconButton
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ display: { sm: 'none' } }}
    >
      <MenuIcon />
    </IconButton>
    <h4 className="text-black text-sm md:text-lg pl-1 font-bold">RTS WEB STUDIO</h4>
  </Toolbar>
</AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box  component="main" sx={{ flexGrow: 1, p: 2, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Suspense fallback={<Loading />}>
          <ErrorBoundary>
            {SelectedModule && <SelectedModule loading={(e)=>setLoading(e)}/>}
          </ErrorBoundary>
        </Suspense>
      </Box>
    </Box>
    </>
  );
};
export default HomePage;