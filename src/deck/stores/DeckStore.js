import { List } from "immutable";
import { BehaviorSubject } from "rx";
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
