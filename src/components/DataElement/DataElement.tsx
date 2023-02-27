import React from "react";
import {Beer} from "../../types/beersTypes";

interface Props {
    beer: Beer;
}

const DataElement: React.FC<Props> = ({beer}) => {
    const {id, name, tagline, image_url, description, abv} = beer;

    return (
        <div>
            <h2>{name}</h2>
            <p>Tagline: {tagline}</p>
            <p>Description: {description}</p>
            <p>ABV: {abv}</p>
            <img src={image_url} alt={name}/>
        </div>
    );
};

export default DataElement;
