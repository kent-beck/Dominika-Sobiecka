import React from "react";
import {useSelector} from "react-redux";
import {Beer} from "../../types/beersTypes";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import BeerTitle from '../UI/BeerTitle/BeerTitle';
import BeerBubbles from "../UI/BeerBubbles/BeerBubbles";
import {BeerItem, BeerItemColImg, BeerItemColText, ButtonsToCart} from "./DataElement.styled";
import CartButton from "../CartButton/CartButton";

interface Props {
    beer?: Beer;
}

const DataElement: React.FC<Props> = () => {
    const {beerId} = useParams<{ beerId: string }>();
    const beer = useSelector((state: any) =>
        state.beersReducer.beers.find((beer: Beer) => beer.id === Number(beerId))
    );

    if (!beer || !beer.id) {
        return <div>No beer data found</div>;
    }

    const {name, tagline, image_url, description, abv, srm} = beer;

    return (
        <>
            <BeerBubbles/>
            <BeerTitle/>
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

                    <ButtonsToCart>
                        <CartButton beer={beer}/>
                        <button>
                            <Link to={`/cart`} key={beer.id}>
                                Check the basket
                            </Link>
                        </button>

                    </ButtonsToCart>
                </BeerItemColText>
            </BeerItem>
        </>
    );
};

export default DataElement;
