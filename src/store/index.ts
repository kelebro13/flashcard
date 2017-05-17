const {createStore} = require('redux');

import rootReducer from './reducers';

/**
 * Redux-хранилище нажего приложения
 * Примечания: подключен ReduxDevTools для Chrome
 */
const state = createStore(
    rootReducer,
    window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
);

export default state;
