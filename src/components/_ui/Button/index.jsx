import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <button
                onClick={this.props.onClick}
                {...props}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;