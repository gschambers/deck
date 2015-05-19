import React from "react";
import { Observable } from "rx";
import Board from "../components/Board";
import * as BoardStore from "../stores/BoardStore";
import { logError } from "../../common/helpers/error";
import { render } from "../../common/helpers/render";

/**
 * @param {Board} board
 * @return {ReactElement}
 */
function buildComponent(board) {
    return (
        <Board
            board={board}
            rotate={true}
        />
    );
}

/**
 * @return {Rx.Disposable}
 */
export function BoardController(id) {
    return Observable.combineLatest(
        BoardStore.observeById(id),
        buildComponent
    ).forEach(
        render, logError
    );
}
