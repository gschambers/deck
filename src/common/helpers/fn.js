/**
 * Partially-apply function.
 *
 * @param {Function} fn
 * @param {...*} args
 * @return {Function}
 */
export function partial(fn, ...args) {
    return fn.bind(fn, ...args);
}
