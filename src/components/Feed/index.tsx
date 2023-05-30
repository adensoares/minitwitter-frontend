import React, { useEffect, useState } from 'react';
import { getGeneralFeed, getPersonalFeed } from '../../api';
import Tweet from '../Tweet';
import { Container, Tweets, EmptyFeed, ErrorMessage, LoadingMessage } from './styles';

interface TweetData {
  id: number;
  user: string;
  content: string;
  created_at: string;
  userId: string;
}

function Feed({ feedType }: { feedType: string }) {
  const [tweets, setTweets] = useState<TweetData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        let response;

        if (feedType === 'general') {
          response = await getGeneralFeed();
        } else {
          response = await getPersonalFeed();
        }
        console.log(response);
        setTweets(response);
      } catch (error) {
        setError('Error fetching feed');
        console.error('Error fetching feed:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [feedType]);


  return (
    <Container>
      {loading ? (
        <LoadingMessage>Loading...</LoadingMessage>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : tweets.length === 0 ? (
        <EmptyFeed>
          <h2>No tweets available</h2>
          <p>Start following users to see their tweets in your feed.</p>
        </EmptyFeed>
      ) : (
        <Tweets>
          {tweets.map((tweet) => (
            <Tweet
              key={tweet.id}
              user={tweet.user}
              content={tweet.content}
              created_at={tweet.created_at} 
              userId={tweet.userId}            />
          ))}
        </Tweets>
      )}
    </Container>
  );


}

export default Feed;
