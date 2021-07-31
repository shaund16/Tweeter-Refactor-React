import React, { useState } from 'react';
import '../styles/TweetForm.css';

const TweetForm = (props) => {
  const { addNewTweet } = props;
  const [tweetText, setTweetText] = useState('');
  const tweetRemainingLength = 140 - tweetText.length;
  const spanStyle = { color: tweetRemainingLength >= 0 ? '#545149' : 'red' };

  const submitTweet = (event) => {
    event.preventDefault();
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText);
    }
  };
  return (
    <section className='new-tweet'>
      <form
        onSubmit={submitTweet}
        id='tweetForm'
        method='POST'
        action='/tweets'
      >
        <label className='question'>What are you humming about?</label>
        <textarea
          value={tweetText}
          name='text'
          onChange={(event) => setTweetText(event.target.value)}
          id='tweet-text'
        ></textarea>
        <div className='bottomForm'>
          <button className='tweetButton' type='submit'>
            Tweet
          </button>
          <output style={spanStyle} name='counter' id='counter'>
            {140 - tweetText.length}
          </output>
        </div>
      </form>
    </section>
  );
};

export default TweetForm;
