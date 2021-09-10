import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <h1>Hello From {this.props.name}</h1>
        )
    }
}

export default Item;