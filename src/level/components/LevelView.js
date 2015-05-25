import { List } from "immutable";
import React, { Component, PropTypes } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd/modules/backends/HTML5";

import BoardView from "../../board/components/Board";
import Board from "../../board/models/Board";
import CardViewer from "../../deck/components/CardViewer";

@DragDropContext(HTML5Backend)
export default class LevelView extends Component {
    static propTypes = {
        board: PropTypes.instanceOf(Board).isRequired,
        decks: PropTypes.instanceOf(List).isRequired
    };

    render() {
        const deck = this.props.decks.find(
            (deck) => deck.name === "hand"
        );

        return (
            <div className="level">
                <BoardView
                    board={this.props.board}
                    rotate={true}
                />

                <CardViewer
                    cards={deck.cards}
                />
            </div>
        );
    }
}
