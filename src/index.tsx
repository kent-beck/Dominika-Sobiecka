import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {configureStore} from './store';
import Root from './views/Root/Root';
import './index.css';

const store = configureStore();

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <Root/>
    </Provider>
);

