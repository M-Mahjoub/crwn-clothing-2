import React from "react";
import './colletion-preview.styles.scss'
import CollectionItem from "../collection-item/colleection-item.component";

const ColletionPreview = ({ title, items }) => {
    return <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                <CollectionItem id={id} {...otherItemProps} />
            ))}
        </div>
    </div>
}

export default ColletionPreview;