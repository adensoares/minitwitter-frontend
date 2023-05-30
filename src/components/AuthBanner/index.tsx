import React, { useState } from 'react';
import Modal from '../Modal';
import { ActionButton, ActionButtonsContainer, Container, MessageContainer } from './styles';

interface AuthBannerProps {
  handleAuthentication: (token: string, refreshToken: string) => void;
}

function AuthBanner({ handleAuthentication }: AuthBannerProps) {
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    setShowModal(true);
  };

  const handleSignup = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <MessageContainer>
        <h2>Não perca o que está acontecendo</h2>
        <span>As pessoas que usam o Twitter são as primeiras a saber.</span>
      </MessageContainer>

      <ActionButtonsContainer>
        <ActionButton outlined onClick={handleLogin}>Sign In</ActionButton>
        {/* <ActionButton onClick={handleSignup}>Sign Up</ActionButton> */}
      </ActionButtonsContainer>

      <Modal showModal={showModal} setShowModal={setShowModal} handleAuthentication={handleAuthentication} />
    </Container>
  );
}

export default AuthBanner;
