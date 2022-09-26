import React from 'react';
import Header from './Header';
import './App.css';

const App = () => {
    function Comment(props) {
        return (
            <div className="Comment">
                <br />
                <div className="UserInfo">
                    <img className="Avatar"
                        src={props.author.avatarUrl}
                        alt={props.author.name} />
                    <div className="UserInfo-name">
                        {props.author.name}
                    </div>
                </div>
                <div className="Comment-text">
                    {props.text}
                </div>
            </div>
        );
    }

    const comment = {
        text: 'I hope you enjoy learning React!',
        author: {
            name: 'Hello Kitty',
            avatarUrl: 'http://placekitten.com/g/250/250'
        }
    };
    return (
        <div className='App'>
            <h1>Hello from App!</h1>
            <Header name="Tanuj" />
            <h4>
            <Comment 
                text={comment.text}
                author={comment.author} />
            </h4>
        </div>
    );
}

export default App;
