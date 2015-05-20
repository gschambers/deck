import classnames from "classnames";
import React, { Component, PropTypes } from "react";
import Attribute from "./Attribute";
import CardModel from "../models/Card";

export default class Card extends Component {
    static propTypes = {
        card: PropTypes.instanceOf(CardModel).isRequired,
        visible: PropTypes.bool.isRequired
    };

    static defaultProps = {
        visible: true
    };

    renderAttributes() {
        return this.props.card.attributes.map(
            (attribute) => (
                <Attribute
                    key={attribute.name}
                    attribute={attribute}
                />
            )
        );
    }

    render() {
        const className = classnames({
            "card": true,
            "card--visible": this.props.visible
        });

        return (
            <div className={className}>
                <div className="card-name">
                    {this.props.card.name}
                </div>

                {this.renderAttributes()}
            </div>
        );
    }
}
