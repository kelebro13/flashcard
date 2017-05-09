const {combineReducers} = require('redux');

import flashcards from '../flashcard/reducer';

const rootReducer = combineReducers({
        flashcards
});

export default rootReducer;