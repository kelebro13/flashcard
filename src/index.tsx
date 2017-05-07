import * as React from 'react';
import * as ReactDOM from 'react-dom';
const {Provider} = require('react-redux');

import Root from './Root';
import state from './store';
import './index.css';

ReactDOM.render(
    <Provider store={state}>
        <Root/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
