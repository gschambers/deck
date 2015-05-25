import classnames from "classnames";
import { List } from "immutable";
import React, { Component, PropTypes } from "react";
import { DropTarget } from "react-dnd";

import { placeCard } from "../actions/boardActions";
import CellModel, { types } from "../models/Cell";
import Card, { CARD } from "../../deck/components/Card";

/**
 * @param {DropTargetConnector} connect
 * @param {DropTargetMonitor} monitor
 */
function collect(connect, monitor) {
    return {
        dropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

const spec = {
    /**
     * @param {Object} props
     * @param {DropTargetMonitor} monitor
     * @return {Boolean}
     */
    canDrop(props, monitor) {
        return true;
    },

    /**
     * @param {Object} props
     * @param {DropTargetMonitor} monitor
     * @param {ReactElement} component
     */
    drop(props, monitor, component) {
        placeCard(
            monitor.getItem().card,
            props.pos
        );
    },

    /**
     * @param {Object} props
     * @param {DropTargetMonitor} monitor
     * @param {ReactElement} component
     */
    hover(props, monitor, component) {

    }
};

@DropTarget(CARD, spec, collect)
export default class Cell extends Component {
    static propTypes = {
        cell: PropTypes.instanceOf(CellModel).isRequired,
        pos: PropTypes.instanceOf(List).isRequired,

        // Injected react-dnd props
        dropTarget: PropTypes.func.isRequired,
        isOver: PropTypes.bool.isRequired
    };

    renderCards() {
        return this.props.cell.cards.map(
            (card) => (
                <Card
                    key={card.id}
                    card={card}
                />
            )
        );
    }

    render() {
        const cell = this.props.cell;

        const className = classnames({
            "board__cell": true,
            "board__cell--over": this.props.isOver,
            "board__cell--community": cell.type === types.COMMUNITY,
            "board__cell--discard": cell.type === types.DISCARD,
            "board__cell--draw": cell.type === types.DRAW,
            "board__cell--empty": cell.type === types.EMPTY,
            "board__cell--hand": cell.type === types.HAND,
            "board__cell--occupied": cell.type === types.OCCUPIED
        });

        return this.props.dropTarget(
            <div className={className}>
                {this.renderCards()}
            </div>
        );
    }
}
