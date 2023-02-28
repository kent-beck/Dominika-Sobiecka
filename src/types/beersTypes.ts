export interface Beer {
    id: number,
    name: string,
    tagline: string,
    description: string,
    image_url: string,
    abv: number,
    ibu: number,
    srm: number,
    ph: number,
}

export type Action =
    | { type: 'FETCH_BEERS_REQUEST' }
    | { type: 'FETCH_BEERS_SUCCESS'; payload: Beer[] }
    | { type: 'FETCH_BEERS_FAILURE'; error: string };

export interface State {
    beers: Beer[];
    loading: boolean;
    error: string | null;
}
