/**
 * Grow an attribute's value in relation to a given seed
 * and the attribute's coefficient up to a limit. This
 * function is deterministic, though it would be typically
 * take a random seed.
 *
 * Example:
 *
 *     const attr = Attribute({
 *         value: 1,
 *         coefficient: 1.5
 *     });
 *
 *     const seed = 0.375;
 *     const limit = 1;
 *
 *     const attr2 = applyGrowth(
 *         attr, seed, limit
 *     );
 *
 *     attr2.value === 2;
 *
 * @param {Attribute} attribute
 * @param {Number} seed
 * @param {Number} limit
 * @return {Attribute}
 */
export function applyGrowth(attribute, seed, limit) {
    const value =
        attribute.value +
            Math.max(limit,
                Math.round(limit * seed * attribute.coefficient));

    return attribute.merge({ value });
}
