import { List } from "immutable";
import { BehaviorSubject } from "rx";

import Board from "../models/Board";
import Cell, { types } from "../models/Cell";
import { wrap } from "../../common/helpers/observe";

const state = new BehaviorSubject(
    List([
        Board({
            id: 1,
            cells: List([
                List([
                    Cell(),
                    Cell(),
                    Cell()
                ]),

                List([
                    Cell(),
                    Cell(),
                    Cell()
                ]),

                List([
                    Cell(),
                    Cell(),
                    Cell()
                ])
            ])
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
