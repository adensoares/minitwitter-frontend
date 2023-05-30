import React, { useState, useContext } from 'react';
import { Container, Avatar, Content, Header, Dot, Body, ActionButtons, ThreeDotsIcon, ImageContent } from './styles';
import Dropdown from '../Dropdown';
import {followUser, unfollowUser}  from '../../api';
import { FollowedUsersContext } from '../../contexts/FollowedUsersContext';

interface TweetProps {
  user: string;
  content: string;
  created_at: string;
  userId: string; 
}

function Tweet({ user, content, created_at, userId }: TweetProps) {
  const { followedUsers, setFollowedUsers } = useContext(FollowedUsersContext);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const options = followedUsers.includes(userId) ? ['Unfollow'] : ['Follow'];

  const handleOptionSelect = async (option: string) => { 
    setDropdownVisible(false);
    
    if(option === 'Follow') {
      try {
        await followUser(userId);
        setFollowedUsers(prevState => [...prevState, userId]);
        alert("Followed successfully");
      } catch (error) {
        console.error("Failed to follow", error);
        alert("Failed to follow");
      }
    } else if(option === 'Unfollow') {
      try {
        await unfollowUser(userId);
        setFollowedUsers(prevState => prevState.filter(id => id !== userId));
        alert("Unfollowed successfully");
      } catch (error) {
        console.error("Failed to unfollow", error);
        alert("Failed to unfollow");
      }
    }
  };
  
  const formatDate = (dateString: string) => {
    const tweetDate = new Date(dateString);
    const now = new Date();
    const differenceInSeconds = (now.getTime() - tweetDate.getTime()) / 1000;

    // Se o tweet foi postado nas últimas 24 horas...
    if (differenceInSeconds < 24 * 3600) {
      if (differenceInSeconds < 3600) {
        // Se o tweet foi postado na última hora, mostre a diferença em minutos.
        const diffInMinutes = Math.round(differenceInSeconds / 60);
        return `${diffInMinutes} min`;
      } else {
        // Se o tweet foi postado nas últimas 24 horas, mas não na última hora, mostre a diferença em horas.
        const diffInHours = Math.round(differenceInSeconds / 3600);
        return `${diffInHours} h`;
      }
    } else {
      // Se o tweet foi postado há mais de 24 horas, mostre a data.
      const months = [
        'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'
      ];
      return `${tweetDate.getDate()} de ${months[tweetDate.getMonth()]}`;
    }
  };

  return (
    <Container>
      <Avatar />
      <ActionButtons onClick={() => setDropdownVisible(!isDropdownVisible)}>
        <ThreeDotsIcon />
      </ActionButtons>
      <Content>
        <Header>
          <strong>{user}</strong>
          <Dot />
          <time>{formatDate(created_at)}</time>
        </Header>

        <Body>
          <span>{content}</span>
          <ImageContent />
        </Body>
      </Content>
      <Dropdown isVisible={isDropdownVisible} options={options} onSelect={handleOptionSelect} />
    </Container>
  );
};

export default Tweet;
