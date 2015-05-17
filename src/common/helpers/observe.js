import { Observable } from "rx";
import { partial } from "./fn";

/**
 * @param {Rx.Subject} subject
 * @return {Rx.Observable}
 */
export function observe(subject) {
    return subject.asObservable()
        .distinctUntilChanged();
}

/**
 * @param {Number} id
 * @param {Record} item
 * @return {Boolean}
 */
function hasId(id, item) {
    return item.id === id;
}

/**
 * @param {Rx.Subject} subject
 * @param {Number} id
 * @return {Rx.Observable}
 */
export function observeById(subject, id) {
    return observe(subject)
        .flatMapLatest(Observable.from)
        .filter(partial(hasId, id))
        .distinctUntilChanged();
}

/**
 * @param {Rx.Subject} subject
 * @return {Object}
 */
export function wrap(subject) {
    return {
        observe: partial(observe, subject),
        observeById: partial(observeById, subject)
    };
}
