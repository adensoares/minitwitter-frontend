import React, { useState, useEffect } from 'react';
import { BellIcon, BottomMenu, Container, EmailIcon, Tabs, TabButton, Header, Title, HomeIcon, SearchIcon, Logo } from './styles';
import Feed from '../Feed';
import miniTwitterLogo from '../../assets/images/miniTwitterLogo.png';
import NewTweet from '../NewTweet';

interface MainProps {
  isAuthenticated: boolean;
}

function Main({ isAuthenticated }: MainProps) {
  const defaultFeedType = isAuthenticated ? localStorage.getItem('feedType') || 'general' : 'general';
  const [feedType, setFeedType] = useState(defaultFeedType);

  const handleForYouClick = () => {
    setFeedType('general');
  };

  const handleFollowingClick = () => {
    setFeedType('personal');
  };

useEffect(() => {
    if (!isAuthenticated) {
      setFeedType('general');
    }
    localStorage.setItem('feedType', feedType);
  }, [feedType, isAuthenticated]);

  return (
    <Container>
      <Header>
        <Title>
          <h2>Home</h2>
          <Logo>
            <img src={miniTwitterLogo} alt="Logo Mini Twitter" />
          </Logo>
        </Title>
        
        {isAuthenticated && 
          <Tabs>
            <TabButton className={feedType === 'general' ? 'active' : ''} onClick={handleForYouClick}>
              <span>For You</span>
            </TabButton>
            <TabButton className={feedType === 'personal' ? 'active' : ''} onClick={handleFollowingClick}>
              <span>Following</span>
            </TabButton>
          </Tabs>
        }
      </Header>

      {isAuthenticated && <NewTweet />}

      <Feed feedType={feedType} />

      <BottomMenu>
        <HomeIcon className='active' />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
}

export default Main;
