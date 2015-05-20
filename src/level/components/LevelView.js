import { List } from "immutable";
import React, { Component, PropTypes } from "react";
import BoardView from "../../board/components/Board";
import Board from "../../board/models/Board";
import CardViewer from "../../deck/components/CardViewer";

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
