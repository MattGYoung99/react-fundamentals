import React from 'react';
import ReactDOM from 'react-dom';

const MyThing = 
        React.createElement('div', { className : 'book'}, 
            React.createElement('div', {className:'title'}, 'Title of the book'),
            React.createElement('div', {className: 'author'},'Author Name'),
            React.createElement('ul', {className: 'stats'},
                [
                    React.createElement('li',{className: 'rating'}, '5 stars'),
                    React.createElement('li', {className: 'isbn'}, '12-345678-910')
                ]
            )
        );

const Str = React.createElement('div', {}, '"Test This Quoted Strings"');

function Greeting() {
    //var username = 'root';
    //var username = null;
    //var username = undefined;
    var username = false;
    return (username === null || username === undefined ? 'Not Logged In' : 'Hello, username'); 
}

ReactDOM.render(
    [<Greeting/>, MyThing, Str],
    document.querySelector('#root')
);