import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

var testTweet = {
    message: "Something about life.",
    gravatar: "008c5926ca861023c1d2a36653fd88e2",
    author: {
        handle: "toogreat",
        name: "Matt Young"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
};

function Tweet({tweet}) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author}/>
                <Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton count={tweet.retweets}/>
                    <RetweetButton count={tweet.likes}/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}

function Avatar({hash}) {
    var url = 'https://www.gravatar.com/avatar/${008c5926ca861023c1d2a36653fd88e2}';
    return (
        <img src={url} className="avatar" alt="avatar" />
    );
}

function Message({text}) {
    return (
        <div className="message">
            {text}
        </div>
    );
}
function getRetweetCount(count) {
    if (count > 0) {
        return (
            <span className="retweet-count">{count}</span>
        )
    } else {
        return null;
    }
}

const RetweetButton = ({count}) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        {getRetweetCount(count)}
    </span>
);

const LikeButton = ({count}) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 &&
            <span className="like-count">
                {count}
            </span>}
    </span>
);

function NameWithHandle({author}) {
    const {name, handle} = author;
    return (
        <span className="name-with-handle">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}

const Time = ({time}) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    );
}

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);



ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));
