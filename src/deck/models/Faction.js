import { Record } from "immutable";

export default Record({
    /** @type {!Number} */
    id: null,

    /** @type {!String} */
    name: "",

    /** @type {?String} */
    description: "",

    /**
     * Baseline attributes for cards of this faction. Any card
     * belonging to this faction will receive these attributes
     * in addition to any of their own attributes.
     *
     * @type {List<Attribute>}
     */
    attributes: List()
});
