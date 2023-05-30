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
          <time>{created_at}</time>
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
