import React, { useState } from 'react';
import { TweetContainer, TweetTextArea, TweetButton, Avatar } from './styles';
import { createTweet } from '../../api';


function NewTweet() {
    const [tweetContent, setTweetContent] = useState('');

    const handleTweetContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweetContent(event.target.value);
    };

    const handleTweetSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
      
        try {
          const response = await createTweet(tweetContent);
          console.log(response);
          // Limpar o textarea após enviar o tweet
          setTweetContent('');
        } catch (error: any) {
          if (error.response) {
            // O servidor respondeu com um código de status fora do intervalo de 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // A solicitação foi feita, mas não houve resposta
            console.log(error.request);
          } else {
            // Algo aconteceu na configuração da solicitação que desencadeou um erro
            console.log('Error', error.message);
          }
          console.log(error.config);
        }
      };
      

    return (
        <TweetContainer>
            <Avatar />
            <TweetTextArea
                placeholder="What's happening?"
                value={tweetContent}
                onChange={handleTweetContentChange}
            />
            <TweetButton disabled={tweetContent.length === 0} onClick={handleTweetSubmit}>
                Tweet
            </TweetButton>
        </TweetContainer>
    );
}

export default NewTweet;
