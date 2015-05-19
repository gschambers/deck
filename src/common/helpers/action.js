import { Subject } from "rx";
import { partial } from "../helpers/fn";
import Action from "../models/Action";

const dispatcher = new Subject();

/**
 * @param {String} ns
 * @param {String} type
 * @param {*} data
 */
export function dispatch(ns, type, data) {
    dispatcher.onNext(
        Action({ ns, type, data })
    );
}

/**
 * @param {String} ns
 * @param {Action} action
 * @return {Boolean}
 */
function hasNamespace(ns, action) {
    return action.ns === ns;
}

/**
 * @param {String} type
 * @param {Action} action
 * @return {Boolean}
 */
function hasType(type, action) {
    return action.type === type;
}

/**
 * @param {String} [ns]
 * @param {String} [type]
 * @return {Observable<Action>}
 */
export function observeActions(ns, type) {
    let obs = dispatcher.asObservable();

    if (ns) {
        obs = obs.filter(
            partial(hasNamespace, ns)
        );

        if (type) {
            obs = obs.filter(
                partial(hasType, type)
            );
        }
    }

    return obs.distinctUntilChanged();
}
