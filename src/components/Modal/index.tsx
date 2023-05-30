import React, { useState } from 'react';
import { Overlay, ModalContainer, ModalTitle, ModalCloseButton, ModalContent, ModalButton, FormContainer, FormRow, FormLabel, FormInput, FormActions, TimesIcon } from './styles';
import { signin, signup } from '../../api';


interface ModalProps {
  showModal?: boolean;
  setShowModal: (show: boolean) => void;
  handleAuthentication: (token: string, refreshToken: string) => void;
}

enum AuthForm {
  SignIn = 'signin',
  SignUp = 'signup',
}

function Modal({ showModal = false, setShowModal, handleAuthentication }: ModalProps) {
  const [activeForm, setActiveForm] = useState(AuthForm.SignIn);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormChange = (form: AuthForm) => {
    setActiveForm(form);
    
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeForm === AuthForm.SignIn) {
      try {
        const response = await signin(email, password);
        handleAuthentication(response.token, response.refreshToken);
        handleCloseModal();
      } catch (error) {
        console.log(error);
      }
    } else if (activeForm === AuthForm.SignUp) {
      try {
        await signup(fullName, email, password);
        const response = await signin(email, password); // Autenticar automaticamente após o cadastro
        handleAuthentication(response.token, response.refreshToken);
        handleCloseModal();
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  

  return (
    <>
      {showModal && (
        <Overlay>
          <ModalContainer>
            <TimesIcon onClick={handleCloseModal} />
            <ModalContent>
              <ModalTitle>{activeForm === AuthForm.SignIn ? 'Sign In' : 'Sign Up'}</ModalTitle>
              <form onSubmit={handleFormSubmit}>
                <FormContainer>
                  {activeForm === AuthForm.SignIn && (
                    <>
                      <FormRow>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </FormRow>
                      <FormRow>
                        <FormLabel>Password</FormLabel>
                        <FormInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </FormRow>
                    </>
                  )}

                  {activeForm === AuthForm.SignUp && (
                    <>
                      <FormRow>
                        <FormLabel>Name</FormLabel>
                        <FormInput type="text" placeholder="Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                      </FormRow>
                      <FormRow>
                        <FormLabel>Email</FormLabel>
                        <FormInput type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </FormRow>
                      <FormRow>
                        <FormLabel>Password</FormLabel>
                        <FormInput type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </FormRow>
                    </>
                  )}

                  <FormActions>
                    <ModalButton type="submit">{activeForm === AuthForm.SignIn ? 'Sign In' : 'Sign Up'}</ModalButton>
                    <span>
                      {activeForm === AuthForm.SignIn ? "Don't have an account? " : 'Already have an account? '}
                      <a onClick={() => handleFormChange(activeForm === AuthForm.SignIn ? AuthForm.SignUp : AuthForm.SignIn)}>
                        {activeForm === AuthForm.SignIn ? 'Sign Up' : 'Sign In'}
                      </a>
                    </span>
                  </FormActions>
                </FormContainer>
              </form>
            </ModalContent>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
}

export default Modal;
