import { List, Record } from "immutable";

export default Record({
    /** @type {!Number} */
    id: null,

    /** @type {!String} */
    name: "",

    /** @type {!String} */
    description: "",

    /**
     * Numerical attributes for this card. Applied attributes
     * will take into account any special characteristics
     * of the card's faction.
     *
     * @type {List<Attribute>}
     */
    attributes: List(),

    /**
     * Equipment (enhancements) attached to this card.
     *
     * @type {List<Equipment>}
     */
    equipment: List(),

    /**
     * Faction of the card. Imbues the card with additional
     * attributes and characteristics.
     *
     * @type {?Faction}
     */
    faction: null,

    /**
     * Card role. A means of categorising cards into
     * attacking/defensive/castle-type roles.
     *
     * @type {?Role}
     */
     role: null
});
