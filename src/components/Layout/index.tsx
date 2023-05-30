
import React from 'react'
import { Container, Wrapper } from './styles'

import LeftSidebar from '../LeftSidebar';
import Main from '../Main';
import RightSidebar from '../RightSidebar';

interface LayoutProps {
  isAuthenticated: boolean;
  handleSignout: () => void;
  username: string;
}


function Layout({ isAuthenticated, handleSignout, username }: LayoutProps) {
  return (
    <Container>
        <Wrapper>
          <LeftSidebar handleSignout={handleSignout} isAuthenticated={isAuthenticated} username={username} />
          <Main isAuthenticated={isAuthenticated} />
          <RightSidebar />
        </Wrapper>
    </Container>
  )
}



export default Layout;