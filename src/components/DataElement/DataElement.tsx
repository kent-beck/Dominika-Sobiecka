import React from "react";
import {useSelector} from "react-redux";
import {Beer} from "../../types/beersTypes";
import {useParams} from "react-router-dom";
import {BeerTitle} from '../BeerTitle/BeerTitle.styled';
import BeerBubbles from "../BeerBubbles/BeerBubbles";
import {BeerItem, BeerItemColImg, BeerItemColText} from './DataElement.styled';

interface Props {
    beer?: Beer;
}

const DataElement: React.FC<Props> = () => {
    const {beerId} = useParams<{ beerId: string }>();
    const beer = useSelector((state: any) => state.beersReducer.beers.find((beer: Beer) => beer.id === Number(beerId)));


    if (!beer || !beer.id) {
        return <div>No beer data found</div>;
    }

    const {name, tagline, image_url, description, abv, srm} = beer;

    return (
        <>
            <BeerBubbles/>
            <BeerTitle>Crazy Beers</BeerTitle>
            <BeerItem key={beer.id}>
                <BeerItemColImg>
                    <img src={image_url} alt={name}/>
                </BeerItemColImg>
                <BeerItemColText>
                    <h2>{name}</h2>
                    <p>Tagline: {tagline}</p>
                    <p>Description: {description}</p>
                    <p>ABV: {abv}</p>
                    <p>Prize: ${srm}</p>
                </BeerItemColText>
            </BeerItem>
        </>
    );
};

export default DataElement;
