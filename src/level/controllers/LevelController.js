import React from "react";
import { Observable } from "rx";
import LevelView from "../components/LevelView";
import * as BoardStore from "../../board/stores/BoardStore";
import * as DeckStore from "../../deck/stores/DeckStore";
import { logError } from "../../common/helpers/error";
import { render } from "../../common/helpers/render";

/**
 * @param {Board} board
 * @param {List<Deck>} decks
 * @return {ReactElement}
 */
function buildComponent(board, decks) {
    return (
        <LevelView
            board={board}
            decks={decks}
        />
    );
}

/**
 * @return {Rx.Disposable}
 */
export function LevelController(id) {
    return Observable.combineLatest(
        BoardStore.observeById(id),
        DeckStore.observe(),
        buildComponent
    ).forEach(
        render, logError
    );
}
