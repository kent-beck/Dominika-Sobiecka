import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {fetchBeers} from '../../actions/beersActions';
import {Beer} from '../../types/beersTypes';
import BeerBubbles from '../BeerBubbles/BeerBubbles';
import SearchBeer from '../SearchBeer/SearchBeer';
import {BeerTitle} from '../BeerTitle/BeerTitle.styled';
import {BeerItems, BeerItem, BeerName, BeerImg, BeerAbv, BeerTagline, ButtonsBeers} from './DataTable.styled';

const DataTable = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const beers = useSelector((state: any) => state.beersReducer.beers);
    const [page, setPage] = useState(1);
    const perPage = 10;

    useEffect(() => {
        dispatch<any>(fetchBeers(page, perPage));
    }, [dispatch, page]);

    const nextPage = () => {
        setPage((page) => page + 1);
    };

    const prevPage = () => {
        setPage((page) => page - 1);
    };

    return (
        <>
            <BeerBubbles/>
            <SearchBeer/>
            <BeerTitle>Crazy Beers</BeerTitle>
            <BeerItems>
                {beers.map((beer: Beer) => (
                    <BeerItem key={beer.id}>
                        <BeerName>{beer.name}</BeerName>
                        <BeerImg src={beer.image_url}/>
                        <BeerAbv>
                            {beer.abv}% <span>abv</span>
                        </BeerAbv>
                        <BeerTagline>{beer.tagline}</BeerTagline>
                    </BeerItem>
                ))}
            </BeerItems>
            <ButtonsBeers>
                <button onClick={prevPage} disabled={page === 1}>
                    Prev
                </button>
                <button onClick={nextPage} disabled={!beers || beers.length < perPage}>
                    Next
                </button>
            </ButtonsBeers>
        </>
    );
};

export default DataTable;
