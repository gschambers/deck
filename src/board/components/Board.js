import classnames from "classnames";
import React, { Component, PropTypes } from "react";

import BoardModel from "../models/Board";
import { types as cellTypes } from "../models/Cell";
import Cell from "./Cell";
import Row from "./Row";

/**
 * Renders a NxN grid of cells with corresponding
 * characteristics - i.e. card and type traits.
 */
export default class Board extends Component {
    static propTypes = {
        board: PropTypes.instanceOf(BoardModel).isRequired,
        rotate: PropTypes.bool.isRequired
    };

    static defaultProps = {
        rotate: false
    };

    renderRow(row, key) {
        const cells = row.map(
            (cell, i) => <Cell key={i} cell={cell} />
        );

        return <Row key={key}>{cells}</Row>;
    }

    renderCells() {
        return this.props.board.cells.map(
            (row, i) => this.renderRow(row, i)
        );
    }

    render() {
        const className = classnames({
            "board": true,
            "board--rotate": this.props.rotate
        });

        return (
            <div className={className}>
                {this.renderCells()}
            </div>
        );
    }
}
