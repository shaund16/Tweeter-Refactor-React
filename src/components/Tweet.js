import React from 'react';
import '../styles/Tweet.css';

const Tweet = (props) => {
  const { name, handle, text, profile_image, date } = props;

  return (
    <article className='previousTweetsArticle'>
      <header className='headerPreviousTweets'>
        <div className='headerPreviousIcon'>
          {/* <img src="https://i.imgur.com/2WZt0D6.png"/> */}
          <span className='nameTweetHeader'>{name}</span>
        </div>
        <span className='emailTweetHeader'>{handle}</span>
      </header>
      <div className='middlePreviousTweets'>
        <label className='previousTweet'>{text}</label>
        <span className='middleTweetBorder'></span>
      </div>
      <footer className='footerPreviousTweets'>
        <span className='previousTweetDays need_to_be_rendered'>{date}</span>
        <div className='previousFooterIcons'>
          <i className='fas fa-flag'></i>
          <i className='fas fa-retweet'></i>
          <i className='fas fa-heart'></i>
        </div>
      </footer>
    </article>
  );
};

export default Tweet;
