import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { store } from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    // const store = configureStore();

    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
})


