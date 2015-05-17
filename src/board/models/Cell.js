import { Record } from "immutable";

export const types = {
    EMPTY: 0,
    DISCARD: 1,
    DRAW: 2,
    COMMUNITY: 3
};

export default Record({
    /**
     * The type of the cell dictates what cards may
     * be played on it and how players can interact
     * with it. The following types are supported:
     *
     * EMPTY - no card may be played
     * DISCARD - cards discarded from hand or after turn
     * DRAW - cards that can be drawn into hand
     * COMMUNITY - cards available to all players
     *
     * @type {Number}
     */
    type: types.EMPTY,

    /**
     * One or more cards played on this cell.
     *
     * @type {List<Card>}
     */
    cards: null
});
