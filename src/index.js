import { createRouter, redirect } from "router-rx";
import { Observable } from "rx";
import { BoardController } from "./board/controllers/BoardController";

/**
 * @return {Rx.Disposable}
 */
function main() {
    return createRouter({
        "/": redirect("/1"),
        "/:id": BoardController
    });
}

Observable.fromEvent(document, "DOMContentLoaded")
    .first()
    .forEach(main, (err) => console.log(err.stack));
