import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {fetchBeers} from '../../actions/actions';
import {Beer} from '../../types/types';

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
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Tagline</th>
                </tr>
                </thead>
                <tbody>
                {beers.map((beer: Beer) => (
                    <tr key={beer.id}>
                        <td>{beer.name}</td>
                        <td>{beer.tagline}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={prevPage} disabled={page === 1}>
                Prev
            </button>
            <button onClick={nextPage} disabled={beers.length < perPage}>
                Next
            </button>
        </>
    );
};

export default DataTable;
