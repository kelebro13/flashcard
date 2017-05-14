import jsCore from './initState/jsCore';
import {CREATE_FLASHCARD, UPDATE_FLASHCARD, DELETE_FLASHCARD} from '../actions/FlashcardsAction';

/**
 * Дефолтнове состояние Redux-хранилища
 */
const initState = [
    {
        id: 0,
        title: 'JavaScript Core',
        description: 'test1',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        cards: jsCore,
    },
    {
        id: 1,
        title: 'JavaScript Core',
        description: 'test1',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        cards: [],
    },
    {
        id: 2,
        title: 'JavaScript Core',
        description: 'test1',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        cards: [],
    },
    {
        id: 3,
        title: 'JavaScript Core',
        description: 'test1',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        cards: [],
    }

];

/**
 * Редьюсер для колод
 * @param state
 * @param action
 * @returns {any}
 */
const flashcards = (state = initState, action: any) => {
    switch (action.type){
        case CREATE_FLASHCARD:
            break;
        case UPDATE_FLASHCARD:
            break;
        case DELETE_FLASHCARD:
            break;
        default:
            return state;
    }
    return state;
};

export default flashcards;