import styled, {css} from 'styled-components';
import { Times } from '../../assets/styles/icons';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  max-width: 600px;
  min-height: 400px;
  max-height: 90vh;
  width: 100%;
  height: 400px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  
  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: relative;
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  padding-left: 12px;
  font-size: 24px;
  color: #000;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 20px;
`;

export const ModalTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 16px;
`;


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const FormInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 12px;

  span {
    margin-top: 12px;
    font-size: 14px;
    color: #888;
  }

  button {
    padding: 8px 16px;
    color: var(--primary);
    background-color: #000;
    border: 1px solid #fff;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background: var(--secondary);
    }
  }

  

  a {
    cursor: pointer;
    color: var(--twitter);
  }
`;

export const ModalButton = styled.button`
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #1da1f2;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0d8cc0;
  }
`;

const iconCSS = css`
    position: absolute;
    top: 0px;
    left: 0px;
    padding-left: 12px;
    font-size: 24px;
    color: #000;
    width: 40px;
    height: 40px;
    cursor: pointer;

    &.active {
        fill: var(--twitter);
    }
`;

export const TimesIcon = styled(Times)`
    ${iconCSS}
`;
