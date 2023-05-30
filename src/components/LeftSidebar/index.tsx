import React from 'react'
import { Bottom, Container, HomeIcon, Logo, MenuButton, Top, Avatar, UserInfo } from './styles'
import  miniTwitterLogo  from '../../assets/images/miniTwitterLogo.png'
import TweetButton from '../TweetButton'
import {signout} from '../../api';

interface LeftSidebarProps {
  handleSignout: () => void;
  isAuthenticated: boolean;
  username: string;
}


function LeftSidebar({ isAuthenticated, handleSignout, username }: LeftSidebarProps) {
  return (
    <Container>
      <Top>
        <Logo>
          <img src={miniTwitterLogo} alt="Logo Mini Twitter" />
        </Logo>

        <MenuButton className='active'>
          <HomeIcon />
          <span >Home</span>
        </MenuButton>
        
        <TweetButton>       
            <span>Tweetar</span>
        </TweetButton>         
      </Top>
      
      {isAuthenticated &&
      <Bottom>
      <Avatar onClick={handleSignout} />
          <UserInfo>
          <strong>{username}</strong>
            <span>@{username}</span>
          </UserInfo>
      </Bottom>
      }

    </Container>
  )
}

export default LeftSidebar