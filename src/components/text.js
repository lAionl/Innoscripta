import React, { Component } from "react";

export class TextComponent extends Component {

    render() {
        const { tag, content, styleClass } = this.props;
        const TagName = tag;
        return (
            <TagName className={styleClass}>{content}</TagName>
        );
    }
}
