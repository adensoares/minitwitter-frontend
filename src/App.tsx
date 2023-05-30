
import React, { useState } from 'react';
import Layout from "./components/Layout";
import GlobalStyles from "./assets/styles/GlobalStyles";
import AuthBanner from './components/AuthBanner';
import { signout, getCurrentUser, getFollowedUsers } from './api';
import { FollowedUsersContext } from './contexts/FollowedUsersContext';


const isAuthenticated = false;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(Boolean(localStorage.getItem('token')));
  const [accessToken, setAccessToken] = useState(localStorage.getItem('token') || '');
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken') || '');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [followedUsers, setFollowedUsers] = useState<string[]>([]);


  const handleAuthentication = async (token: string, refreshToken: string) => {
    setIsAuthenticated(true);
    setAccessToken(token);
    setRefreshToken(refreshToken);
    
    const user = await getCurrentUser();
    setUsername(user.full_name);
    localStorage.setItem('username', user.full_name);
  
    const followedUsers = await getFollowedUsers();
    setFollowedUsers(followedUsers);
  };
  

  const handleSignout = () => {
    signout();
    setIsAuthenticated(false);
    setAccessToken('');
    setRefreshToken('');
    localStorage.removeItem('feedType');
  };

  return (
    <>
    <FollowedUsersContext.Provider value={{ followedUsers, setFollowedUsers }}>
        {!isAuthenticated && <AuthBanner handleAuthentication={handleAuthentication} />}
        <Layout isAuthenticated={isAuthenticated} handleSignout={handleSignout} username={username} />
        <GlobalStyles />
      </FollowedUsersContext.Provider>

    </>
  );
}


export default App;
