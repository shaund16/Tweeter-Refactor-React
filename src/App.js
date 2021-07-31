import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Tweet from './components/Tweet';
import TweetForm from './components/TweetForm';

const initalTweetData = [
  {
    name: 'Shaun Purslow',
    handle: '@shaunp',
    // profile_image:
    text: 'This is cool',
    date: '10 days ago',
  },
  {
    name: 'Eliana Lynn',
    handle: '@EllieL',
    // profile_image:
    text: 'I like this app',
    date: '9 days ago',
  },
  {
    name: 'John Doe',
    handle: '@jDoe',
    // profile_image:
    text: 'Looks good',
    date: '10 days ago',
  }
];

function App() {
  const [tweetData, setTweetData] = useState(initalTweetData);

  const tweets = tweetData.map((tweetsData, index) => {
    return (
      <Tweet
        key={index}
        name={tweetsData.name}
        handle={tweetsData.handle}
        text={tweetsData.text}
        date={tweetsData.date}
      />
    );
  });

  const addNewTweet = (text) => {
    const newTweet = {
      name: 'Shaun Purslow',
      handle: '@sdp',
      // profile_image:
      text,
      date: 'Just Now',
    };

    setTweetData([newTweet, ...tweetData]);
  };
  return (
    <div className='App'>
      <Navigation />
      <Profile />
      <main className='container'>
        <TweetForm addNewTweet={addNewTweet} />
        <section className='TweetSection'>{tweets}</section>
      </main>
    </div>
  );
}

export default App;
