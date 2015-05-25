import { List, Range } from "immutable";
import { BehaviorSubject } from "rx";

import Board from "../models/Board";
import Cell, { types } from "../models/Cell";
import { wrap } from "../../common/helpers/observe";
import Attribute from "../../deck/models/Attribute";
import Card from "../../deck/models/Card";
import { observeActions } from "../../common/helpers/action";

const state = new BehaviorSubject(
    Board({
        id: 1,
        cells: List(Range(0, 4)).map(
            () => List(Range(0, 4)).toList().map(
                () => Cell({
                    type: types.EMPTY,
                    cards: List()
                })
            )
        )
    })
);

const {
    observe,
    observeById } = wrap(state);

export {
    observe,
    observeById
};

/**
 * @param {Board} board
 * @param {List<Number>} pos
 * @param {Cell} cell
 * @return {Board}
 */
function updateCellAtPosition(board, pos, cell) {
    return board.updateIn(
        ["cells"], cells => cells.mergeIn(
            pos, cell
        )
    );
}

/**
 * @param {Board} board
 * @param {List<Number>} pos
 * @return {Cell}
 */
function findCellAtPosition(board, pos) {
    return board.cells.getIn(pos);
}

/**
 * @param {Player} player
 * @param {Card} card
 * @return {Boolean}
 */
function isPlayableCard(player, card) {
    // TODO: Check whether player is able to play card
    return true;
}

/**
 * @param {Player} player
 * @param {Cell} cell
 * @return {Boolean}
 */
function isPlayableCell(player, cell) {
    return cell.type === types.EMPTY && cell.player === null;
}

/**
 * @param {Cell} cell
 * @param {Card} card
 * @return {Boolean}
 */
function isValidCardForCell(cell, card) {
    return true;
}

/**
 * @param {Cell} cell
 * @param {Card} card
 * @return {Boolean}
 */
function isValidCardPlacement(cell, card, player) {
    return (
        isPlayableCell(player, cell) &&
        isPlayableCard(player, card) &&
        isValidCardForCell(cell, card)
    );
}

/**
 * @param {data}
 * @return {List<Board>}
 */
function handlePlaceCard(data) {
    let board = state.value;

    const card = data.get("card");
    const player = data.get("player");
    const pos = data.get("pos");

    let cell = findCellAtPosition(board, pos);

    if (isValidCardPlacement(cell, card, player)) {
        const cards = List([card]);
        cell = cell.merge({ cards, player });
        board = updateCellAtPosition(board, pos, cell);
    }

    return board;
}

observeActions("board", "placeCard")
    .map(action => handlePlaceCard(action.data))
    .forEach(value => state.onNext(value));
