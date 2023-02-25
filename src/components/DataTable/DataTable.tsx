import {useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {fetchBeers} from '../../actions/actions';
import {useEffect} from "react";

const DataTable = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const beers = useSelector((state: any) => state.beers);
    const loading = useSelector((state: any) => state.loading);
    const error = useSelector((state: any) => state.error);

    useEffect(() => {
        dispatch<any>(fetchBeers());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Tagline</th>
            </tr>
            </thead>
            <tbody>
            {beers.map((beer: any) => (
                <tr key={beer.id}>
                    <td>{beer.name}</td>
                    <td>{beer.tagline}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default DataTable;
