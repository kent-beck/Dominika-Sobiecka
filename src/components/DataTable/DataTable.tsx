import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {fetchBeers} from '../../actions/actions';
import {Beer} from '../../types/types';
import BeerBubbles from '../BeerBubbles/BeerBubbles';
import {BeerTitle} from '../BeerTitle/BeerTitle.styled';
import {BeerItems, BeerItem, BeerName, BeerImg, BeerAbv, BeerTagline, ButtonsBeers} from './DataTable.styled';

const DataTable = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const beers = useSelector((state: any) => state.beers);
    const loading = useSelector((state: any) => state.loading);
    const error = useSelector((state: any) => state.error);
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

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <BeerBubbles/>
            <BeerTitle>Crazy Beers</BeerTitle>
            <BeerItems>
                {beers.map((beer: Beer) => (
                    <BeerItem key={beer.id}>
                        <BeerName>{beer.name}</BeerName>
                        <BeerImg src={beer.image_url}/>
                        <BeerAbv>{beer.abv}% <span>abv</span></BeerAbv>
                        <BeerTagline>{beer.tagline}</BeerTagline>
                    </BeerItem>
                ))}
            </BeerItems>
            <ButtonsBeers>
                <button onClick={prevPage} disabled={page === 1}>
                    Prev
                </button>
                <button onClick={nextPage} disabled={beers.length < perPage}>
                    Next
                </button>
            </ButtonsBeers>
        </>
    );
};

export default DataTable;
