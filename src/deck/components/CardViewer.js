import { List } from "immutable";
import React, { Component, PropTypes } from "react";
import Card from "./Card";

export default class CardViewer extends Component {
    static propTypes = {
        cards: PropTypes.instanceOf(List).isRequired
    };

    renderCards() {
        return this.props.cards.map(
            (card) => (
                <Card
                    key={card.id}
                    card={card}
                />
            )
        );
    }

    render() {
        return (
            <div className="card-viewer">
                {this.renderCards()}
            </div>
        );
    }
}
