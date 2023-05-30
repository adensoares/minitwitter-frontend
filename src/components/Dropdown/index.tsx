import React from 'react';
import { Container, Option } from './styles';

interface DropdownMenuProps {
  isVisible: boolean;
  options: string[];
  onSelect: (option: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isVisible, options, onSelect }) => {
  if (!isVisible) return null;

  return (
    <Container>
      {options.map((option, index) => (
        <Option key={index} onClick={() => onSelect(option)}>
          <strong>{option}</strong>
        </Option>
      ))}
    </Container>
  );
};

export default DropdownMenu;
