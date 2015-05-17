import React, { Component, PropTypes } from "react";

export default class Row extends Component {
    render() {
        return (
            <div className="board__row">
                {this.props.children}
            </div>
        );
    }
}
