/**
 * @param {Error} err
 */
export function logError(err) {
    if (err.stack) {
        console.log(err.stack);
    } else {
        console.log(err);
    }
}
