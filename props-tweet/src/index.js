import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var testTweet = {
    message: "Something about life.",
    gravatar: "008c5926ca861023c1d2a36653fd88e2",
    author: {
        handle: "catperson",
        name: "IAMA Cat Person"
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
                <NameWithHandle/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton/>
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

function NameWithHandle() {
    return (
        <span className="name-with-handle">
            <span className="name">Mathias the Gregory</span>
            <span className="handle">@toogreat</span>
        </span>
    );
}

const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);



ReactDOM.render(<Tweet tweet={testTweet}/>, document.querySelector('#root'));
