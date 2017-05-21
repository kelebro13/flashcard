import jsCore from './initState/jsCore';
import {CREATE_FLASHCARD, UPDATE_FLASHCARD, DELETE_FLASHCARD} from '../actions/FlashcardsAction';
import cards from './CardReducer';

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

    const {card, id} = action;
    // если action содержит card и id значит это действия над карточкой, а не над параметрами колоды
    if (card && id) {
        const flashcard = state.find((item) => {
            return item.id === id;
        });
        cards({...flashcard}, action);
    }

    switch (action.type) {
        case CREATE_FLASHCARD:
            const newFlashcard = action.flashcard;
            newFlashcard.id = state.length;
            return state.concat(newFlashcard); //Array.prototype.concat - возвращает НОВЫЙ массив - это важно для реализации reducer-а
        case UPDATE_FLASHCARD:
            const indexForUpdate = state.findIndex((item) => {
                return item.id === action.flashcard.id;
            });
            const newStateForUpdate = [...state];
            newStateForUpdate[indexForUpdate] = action.flashcard
            return newStateForUpdate;
        case DELETE_FLASHCARD:
            const indexForDelete = state.findIndex((item) => {
                return item.id === action.flashcard.id;
            });
            const newStateForDelete = [...state];
            newStateForDelete.splice(indexForDelete, 1); // т.к. splice модифицирует массив, мы сначало создали копию state
            return newStateForDelete;
        default:
            return state;
    }

};

export default flashcards;