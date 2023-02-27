import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {fetchBeers} from '../../actions/beersActions';
import {Beer} from '../../types/beersTypes';
import BeerBubbles from '../UI/BeerBubbles/BeerBubbles';
import SearchBeer from '../UI/SearchBeer/SearchBeer';
import {Link} from 'react-router-dom';
import {BeerTitle} from '../UI/BeerTitle/BeerTitle.styled';
import {BeerItems, BeerItem, BeerName, BeerImg, BeerAbv, BeerTagline, ButtonsBeers} from './DataTable.styled';

const DataTable = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const beers = useSelector((state: any) => state.beersReducer.beers);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredBeers, setFilteredBeers] = useState(beers);
    const [searchTerm, setSearchTerm] = useState('');
    const perPage = 10;

    useEffect(() => {
        dispatch<any>(fetchBeers(currentPage, perPage));
    }, [dispatch, currentPage, perPage]);

    useEffect(() => {
        const filtered = beers.filter((beer: Beer) => {
            return (
                beer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                beer.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        });

        setFilteredBeers(filtered);
        setCurrentPage(1);
    }, [beers, searchTerm]);

    const nextPage = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((currentPage) => currentPage - 1);
    };

    useEffect(() => {
        setFilteredBeers(beers);
        setCurrentPage(1);
    }, [beers]);

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    };

    return (
        <>
            <BeerBubbles/>
            <SearchBeer onSearch={handleSearch}/>
            <BeerTitle>Crazy Beers</BeerTitle>
            <BeerItems>
                {filteredBeers.slice((currentPage - 1) * perPage, currentPage * perPage).map((beer: Beer) => (
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
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                <button onClick={nextPage} disabled={filteredBeers.length < perPage}>
                    Next
                </button>
            </ButtonsBeers>
        </>
    );
};

export default DataTable;
