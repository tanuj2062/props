import React from 'react';
const Header = (props) => {
    return(
        <div>
            <h2>Hello from header!</h2>
            <h3>Name : {props.name}</h3>
        </div>
    );
}

export default Header;