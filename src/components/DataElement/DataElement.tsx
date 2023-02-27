import React from "react";
import {Beer} from "../../types/beersTypes";
import {useParams} from 'react-router-dom';

interface Props {
    beer?: Beer;
}

const DataElement: React.FC<Props> = ({beer}) => {
    const {beerId} = useParams<{ beerId: string }>();
    console.log('beerId:', beerId);
    console.log('beer:', beer);

    if (!beer || !beer.id) {
        return <div>No beer data found</div>;
    }

    const {name, tagline, image_url, description, abv} = beer;

    return (
        <div key={beer.id}>
            <h2>{name}</h2>
            <p>Tagline: {tagline}</p>
            <p>Description: {description}</p>
            <p>ABV: {abv}</p>
            <img src={image_url} alt={name}/>
        </div>
    );
};


export default DataElement;
