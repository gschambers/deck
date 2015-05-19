import React from "react";

/**
 * @param {ReactElement} component
 * @return {ReactElement}
 */
export function render(component) {
    return React.render(
        component,
        document.body
    );
}
