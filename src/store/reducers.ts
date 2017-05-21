const {combineReducers} = require('redux');

import flashcards from '../flashcard/reducer/FlashcardReducer';

const rootReducer = combineReducers({
        flashcards
});

export default rootReducer;