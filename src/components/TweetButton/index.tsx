import React, { ReactNode } from 'react';
import { TweetButton as TweetButtonStyle } from './styles';

interface TweetButtonProps {
  children: ReactNode;
}

function TweetButton({ children, ...props }: TweetButtonProps) {
  return <TweetButtonStyle {...props}>{children}</TweetButtonStyle>;
}

export default TweetButton;
