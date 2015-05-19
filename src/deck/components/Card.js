import classnames from "classnames";
import React, { Component, PropTypes } from "react";
import CardModel from "../models/Card";

export default class Card extends Component {
    static propTypes = {
        card: PropTypes.instanceOf(CardModel).isRequired,
        visible: PropTypes.bool.isRequired
    };

    static defaultProps = {
        visible: true
    };

    render() {
        const className = classnames({
            "card": true,
            "card--visible": this.props.visible
        });

        return (
            <div className={className}>
                {this.props.card.name}
            </div>
        );
    }
}
