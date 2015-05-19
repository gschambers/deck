import classnames from "classnames";
import React, { Component, PropTypes } from "react";
import CellModel, { types } from "../models/Cell";
import Card from "../../deck/components/Card";

export default class Cell extends Component {
    static propTypes = {
        cell: PropTypes.instanceOf(CellModel).isRequired
    };

    renderCards() {
        return this.props.cell.cards.map(
            (card) => <Card key={card.id} card={card} />
        );
    }

    render() {
        const cell = this.props.cell;

        const className = classnames({
            "board__cell": true,
            "board__cell--community": cell.type === types.COMMUNITY,
            "board__cell--discard": cell.type === types.DISCARD,
            "board__cell--draw": cell.type === types.DRAW,
            "board__cell--empty": cell.type === types.EMPTY,
            "board__cell--hand": cell.type === types.HAND
        });

        return (
            <div className={className}>
                {this.renderCards()}
            </div>
        );
    }
}
