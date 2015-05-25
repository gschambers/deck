import classnames from "classnames";
import React, { Component, PropTypes } from "react";
import { DragSource } from "react-dnd";

import Attribute from "./Attribute";
import CardModel from "../models/Card";

export const CARD = Symbol();

/**
 * @param {connect} DragSourceConnector
 * @param {monitor} DragSourceMonitor
 */
function collect(connect, monitor) {
    return {
        dragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}

const spec = {
    /**
     * @param {Object} props
     * @param {DragSourceMonitor} monitor
     * @return {Boolean}
     */
    canDrag(props, monitor) {
        return props.isDraggable;
    },

    /**
     * @param {Object} props
     * @param {DragSourceMonitor} monitor
     * @param {ReactElement} component
     */
    beginDrag(props, monitor, component) {
        return { card: props.card };
    }
};

@DragSource(CARD, spec, collect)
export default class Card extends Component {
    static propTypes = {
        card: PropTypes.instanceOf(CardModel).isRequired,
        isDraggable: PropTypes.bool.isRequired,
        isVisible: PropTypes.bool.isRequired,

        // Injected react-dnd props
        dragSource: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired
    };

    static defaultProps = {
        isDraggable: false,
        isVisible: true
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
            "card--visible": this.props.isVisible
        });

        return this.props.dragSource(
            <div className={className}>
                <div className="card-name">
                    {this.props.card.name}
                </div>

                {this.renderAttributes()}
            </div>
        );
    }
}
