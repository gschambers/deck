import { List, Record } from "immutable";

export default Record({
    /** @type {!Number} */
    id: null,

    /**
     * Matrix of cells. Each cell corresponds to
     * a playable area on the board.
     *
     * @type {List<List<Cell>>}
     */
    cells: List()
});
