import { List, Range } from "immutable";
import { BehaviorSubject } from "rx";

import Board from "../models/Board";
import Cell, { types } from "../models/Cell";
import { wrap } from "../../common/helpers/observe";
import Card from "../../deck/models/Card";

const state = new BehaviorSubject(
    List([
        Board({
            id: 1,
            cells: Range(0, 4).map(
                () => Range(0, 4).map(
                    () => Cell({
                        type: types.EMPTY,
                        cards: List([
                            Card({
                                id: 1,
                                name: "Avatar of the Fallen"
                            })
                        ])
                    })
                )
            )
        })
    ])
);

const {
    observe,
    observeById } = wrap(state);

export {
    observe,
    observeById
};
