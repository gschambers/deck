import React, { Component, PropTypes } from "react";
import BoardModel from "../models/Board";
import { types as cellTypes } from "../models/Cell";
import EmptyCell from "./EmptyCell";
import Row from "./Row";

/**
 * Renders a NxN grid of cells with corresponding
 * characteristics - i.e. card and type traits.
 */
export default class Board extends Component {
    static propTypes = {
        board: PropTypes.instanceOf(BoardModel).isRequired
    };

    renderRow(row, key) {
        const cells = row.map(
            (cell, i) => {
                switch (cell.type) {
                    default:
                    case cellTypes.EMPTY:
                        return <EmptyCell key={i} cell={cell} />;
                }
            }
        );

        return <Row key={key}>{cells}</Row>;
    }

    renderCells() {
        return this.props.board.cells.map(
            (row, i) => this.renderRow(row, i)
        );
    }

    render() {
        return (
            <div className="board">
                {this.renderCells()}
            </div>
        );
    }
}
