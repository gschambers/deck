import { List, Record } from "immutable";

export default Record({
    /** @type {!String} */
    name: "",

    /** @type {!List<Card>} */
    cards: List()
});
