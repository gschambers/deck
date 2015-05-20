import React, { Component, PropTypes } from "react";
import AttributeModel from "../models/Attribute";

export default class Attribute extends Component {
    static propTypes = {
        attribute: PropTypes.instanceOf(AttributeModel).isRequired
    };

    render() {
        return (
            <div className="card-attribute">
                {this.props.attribute.name}:
                {this.props.attribute.value}
            </div>
        );
    }
}
