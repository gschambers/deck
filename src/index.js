import { createRouter, redirect } from "router-rx";
import { Observable } from "rx";
import { LevelController } from "./level/controllers/LevelController";

/**
 * @return {Rx.Disposable}
 */
function main() {
    return createRouter({
        "/": redirect("/1"),
        "/:id": LevelController
    });
}

Observable.fromEvent(document, "DOMContentLoaded")
    .first()
    .forEach(main, (err) => console.log(err.stack));
