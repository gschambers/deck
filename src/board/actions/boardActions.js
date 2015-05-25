import { Map } from "immutable";
import { dispatch } from "../../common/helpers/action";

/**
 * @param {Card} card
 * @param {List<Number>} pos
 */
export function placeCard(card, pos) {
    dispatch("board", "placeCard",
        Map({ card, pos }));
}
