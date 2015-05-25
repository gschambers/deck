import { List } from "immutable";
import { BehaviorSubject } from "rx";

import { observeActions } from "../../common/helpers/action";
import { wrap } from "../../common/helpers/observe";
import Attribute from "../models/Attribute";
import Card from "../models/Card";
import Deck from "../models/Deck";

const state = new BehaviorSubject(
    List([
        Deck({
            name: "hand",
            cards: List([
                Card({
                    id: 1,
                    name: "Volunteer",
                    description: "Basic melee unit",
                    attributes: List([
                        Attribute({ name: "Attack", value: 6 }),
                        Attribute({ name: "Defence", value: 5 })
                    ])
                }),

                Card({
                    id: 2,
                    name: "Volunteer",
                    description: "Basic melee unit",
                    attributes: List([
                        Attribute({ name: "Attack", value: 6 }),
                        Attribute({ name: "Defence", value: 5 })
                    ])
                })
            ])
        })
    ])
);

const { observe } = wrap(state);

export {
    observe
};

/**
 * @param {String} deckName
 * @param {Map} data
 * @return {List<Deck>}
 */
function handleRemoveCardFromDeck(deckName, data) {
    const decks = state.value;

    const index = decks.findIndex(
        deck => deck.name === deckName
    );

    return decks.updateIn(
        [index, "cards"],
        cards => cards.filterNot(
            card => card === data.get("card")
        )
    );
}

observeActions("board", "placeCard")
    .map(action => handleRemoveCardFromDeck("hand", action.data))
    .forEach(value => state.onNext(value));
