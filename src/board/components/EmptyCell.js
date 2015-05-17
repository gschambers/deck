import React, { Component, PropTypes } from "react";
import Cell from "../models/Cell";

export default class EmptyCell extends Component {
    static propTypes = {
        cell: PropTypes.instanceOf(Cell).isRequired
    };

    render() {
        return (
            <div className="board__cell board__cell--empty" />
        );
    }
}
