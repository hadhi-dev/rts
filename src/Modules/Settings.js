import React, { useState } from 'react';

const Settings = (props) => {
  const [activeMenuItem, setActiveMenuItem] = useState('profile');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeMenuItem) {
      case 'profile':
        return <ProfilePicture />;
      case 'manageUser':
        return <ManageUser />;
      case 'manageClient':
        return <ManageClient />;
      case 'manageProject':
        return <ManageProject />;
      default:
        return null;
    }
  };

  return (
    <div className="h-auto bg-gray-200">
      <div className="w-full flex flex-col md:flex-row">
        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="material-icons">menu</i>
        </button>

        {/* Left Menu (Mobile) */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b-2 border-gray-300">
            {/* Mobile Menu List */}
            <ul>
              <li
                className={`cursor-pointer ${
                  activeMenuItem === 'profile' && 'bg-blue-200'
                }`}
                onClick={() => {
                  setActiveMenuItem('profile');
                  setIsMobileMenuOpen(false);
                }}
              >
                <i className="material-icons text-blue-600">person</i> Profile
              </li>
              <li
                className={`cursor-pointer ${
                  activeMenuItem === 'manageUser' && 'bg-blue-200'
                }`}
                onClick={() => {
                  setActiveMenuItem('manageUser');
                  setIsMobileMenuOpen(false);
                }}
              >
                <i className="material-icons text-blue-600">manage_accounts</i> Manage User
              </li>
              <li
                className={`cursor-pointer ${
                  activeMenuItem === 'manageClient' && 'bg-blue-200'
                }`}
                onClick={() => {
                  setActiveMenuItem('manageClient');
                  setIsMobileMenuOpen(false);
                }}
              >
                <i className="material-icons text-blue-600">public</i> Manage Client
              </li>
              <li
                className={`cursor-pointer ${
                  activeMenuItem === 'manageProject' && 'bg-blue-200'
                }`}
                onClick={() => {
                  setActiveMenuItem('manageProject');
                  setIsMobileMenuOpen(false);
                }}
              >
                <i className="material-icons text-blue-600">dvr</i> Manage Project
              </li>
            </ul>
          </div>
        )}

        {/* Left Menu (Desktop) */}
        <div className="w-1/4 bg-white border-r-2 border-gray-300">
          {/* Desktop Profile Picture and Name */}
          <div className="text-center mb-4 hidden md:block">
            <ProfilePicture />
            <p className="mt-2 text-gray-800">Abdul Hadhi</p>
          </div>

          {/* Desktop Menu List */}
          <ul className="hidden md:block">
          <li
              className={`cursor-pointer ${
                activeMenuItem === 'profile' && 'bg-blue-200'
              }`}
              onClick={() => setActiveMenuItem('profile')}
            >
                <span className={`material-icons bg-blue-200 text-blue-600 rounded-md p-1`}>person</span>
              Profile
            </li>
            <li
              className={`cursor-pointer ${
                activeMenuItem === 'manageUser' && 'bg-blue-200'
              }`}
              onClick={() => setActiveMenuItem('manageUser')}
            >
                <span class="material-icons bg-blue-200 text-blue-600 rounded-md p-1">manage_accounts</span>
              Manage User
            </li>
            <li
              className={`cursor-pointer ${
                activeMenuItem === 'manageClient' && 'bg-blue-200'
              }`}
              onClick={() => setActiveMenuItem('manageClient')}
            >
                <span class="material-icons bg-blue-200 text-blue-600 rounded-md p-1">public</span>
              Manage Client
            </li>
            <li
              className={`cursor-pointer ${
                activeMenuItem === 'manageProject' && 'bg-blue-200'
              }`}
              onClick={() => setActiveMenuItem('manageProject')}
            >
                <span class="material-icons bg-blue-200 text-blue-600 rounded-md p-1">dvr</span>
              Manage Project
            </li>
          </ul>
        </div>

        {/* Right Content */}
        <div className="w-full p-2 bg-white">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
const ProfilePicture = () => {
  return (
    <div data-aos="fade-down" data-aos-delay="100" class="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-10 md:w-20 md:h-20 h-10 relative overflow-hidden mt-20 md:h-96 md:w-96 aos-init aos-animate">
      <img data-aos="zoom-in-up" data-aos-delay="300" src="https://hadhi.tech/documents/hadhiPortfolioAvatar.png" alt="Abdul Hadhi" className="w-full h-full object-cover my-image aos-init aos-animate"/>
      </div>
  );
};
const ManageUser = () => {
    const [users, setUsers] = useState([
      { id: 1, name: 'User 1', role: 'Admin' },
      { id: 2, name: 'User 2', role: 'User' },
      { id: 3, name: 'User 3', role: 'User' },
      // Add more dummy user data
    ]);
  
    const [selectedUser, setSelectedUser] = useState(null);
  
    const addUser = () => {
      // Add a new user to the list with dummy data
      const newUser = {
        id: users.length + 1,
        name: 'New User',
        role: 'User',
      };
      setUsers([...users, newUser]);
    };
  
    return (
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
  
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 mb-4"
          onClick={addUser}
        >
          Add User
        </button>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className={`border p-4 ${
                selectedUser && selectedUser.id === user.id
                  ? 'bg-blue-200'
                  : 'bg-white'
              } cursor-pointer`}
              onClick={() => setSelectedUser(user)}
            >
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-gray-500">{user.role}</p>
            </div>
          ))}
        </div>
  
        {selectedUser && (
          <div className="mt-4 border p-4 bg-white">
            <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
            <p className="text-gray-500">{selectedUser.role}</p>
            <button
              className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
              onClick={() => {
                // Implement actions for managing the selected user
                alert(`You can manage ${selectedUser.name} here.`);
              }}
            >
              Manage User
            </button>
          </div>
        )}
      </div>
    );
  };

const ManageClient = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Clients</h2>
    </div>
  );
};

const ManageProject = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Projects</h2>
    </div>
  );
};