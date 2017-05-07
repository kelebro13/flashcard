const {createStore} = require('redux');

import reducers = require('./reducers');

/**
 * Redux-хранилище нажего приложения
 * Примечания: подключен ReduxDevTools для Chrome
 */
const state = createStore(
    reducers,
    window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
);

export default state;
