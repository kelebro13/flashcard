import { combineReducers } from 'redux';

import flashcards from '../flashcard/reducer';

const reducers = combineReducers({
        flashcards
});

export default reducers;