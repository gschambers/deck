import { Record } from "immutable";

export default Record({
    /** @type {String} */
    name: "",

    /**
     * Lower bound for attribute value.
     *
     * @type {!Number}
     */
    minValue: 0,

    /**
     * Upper bound for attribute value.
     *
     * @type {!Number}
     */
    maxValue: 255,

    /**
     * Continuous value within the bounds of `minValue`
     * and `maxValue`.
     *
     * @type {!Number}
     */
    value: 0,

    /**
     * Growth-rate coefficient. After completing a contest,
     * card attributes can change in response to the applied
     * growth calculation.
     *
     * @type {!Number}
     */
    coefficient: 1.0
});
