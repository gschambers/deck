import React from "react";
import Board from "../components/Board";
import * as BoardStore from "../stores/BoardStore";
import { logError } from "../../common/helpers/error";

/**
 * @param {Board} board
 * @return {ReactElement}
 */
function render(board) {
    return React.render(
        <Board board={board} />,
        document.body
    );
}

/**
 * @return {Rx.Disposable}
 */
export function BoardController(id) {
    return BoardStore.observeById(id).forEach(
        render, logError
    );
}
