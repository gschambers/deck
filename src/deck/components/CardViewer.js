import { List } from "immutable";
import React, { Component, PropTypes } from "react";

export default class CardViewer extends Component {
    static propTypes = {
        cards: PropTypes.instanceOf(List).isRequired
    };

    render() {
        return (
            <div className="card-viewer">

            </div>
        );
    }
}
