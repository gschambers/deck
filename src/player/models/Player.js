import { Record } from "immutable";

export default Record({
    /** @type {Number} */
    id: null,

    /** @type {!String} */
    userName: "",

    /** @type {!String} */
    realName: "",

    /** @type {?Faction} */
    faction: null,

    /** @type {!Number} */
    experience: 0
});
