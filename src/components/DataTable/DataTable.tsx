import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {fetchBeers} from '../../actions/beersActions';
import {Beer} from '../../types/beersTypes';
import BeerBubbles from '../UI/BeerBubbles/BeerBubbles';
import SearchBeer from '../UI/SearchBeer/SearchBeer';
import {Link} from 'react-router-dom';
import {BeerTitle} from '../UI/BeerTitle/BeerTitle.styled';
import {BeerItems, BeerItem, BeerName, BeerImg, BeerAbv, BeerTagline, ButtonsBeers} from './DataTable.styled';

const DataTable: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const {beers, loading, error} = useSelector((state: any) => state.beersReducer);
    const perPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch<any>(fetchBeers(currentPage, perPage));
    }, [dispatch, currentPage, perPage]);

    const handleSearch = (searchTerm: string) => {
        dispatch<any>(fetchBeers(1, perPage, searchTerm));
        setCurrentPage(1);
    };

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <BeerBubbles/>
            <SearchBeer onSearch={handleSearch}/>
            <BeerTitle>Crazy Beers</BeerTitle>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                <>
                    <BeerItems>
                        {beers.map((beer: Beer) => (
                            <Link to={`/dataelement/${beer.id}`} key={beer.id}>
                                <BeerItem>
                                    <BeerName>{beer.name}</BeerName>
                                    <BeerImg src={beer.image_url}/>
                                    <BeerAbv>
                                        {beer.abv}% <span>abv</span>
                                    </BeerAbv>
                                    <BeerTagline>{beer.tagline}</BeerTagline>
                                </BeerItem>
                            </Link>
                        ))}
                    </BeerItems>
                    <ButtonsBeers>
                        <button onClick={prevPage} disabled={beers.length < perPage || currentPage === 1}>
                            Prev
                        </button>


                        <button onClick={nextPage} disabled={beers.length < perPage}>
                            Next
                        </button>
                    </ButtonsBeers>
                </>
            )}
        </>
    );
};

export default DataTable;
