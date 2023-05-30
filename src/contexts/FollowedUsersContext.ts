import React from 'react';

interface FollowedUsersContextProps {
  followedUsers: string[];
  setFollowedUsers: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FollowedUsersContext = React.createContext<FollowedUsersContextProps>({
  followedUsers: [],
  setFollowedUsers: () => {},
});
