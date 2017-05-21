import {CREATE_CARD, UPDATE_CARD, DELETE_CARD} from '../actions/CardsActions';

/** initState не нужно, т.к. инициализация происходит в FlashcardReducer */

const cards = (state: any, action: any) => {
    switch (action.type) {
        case CREATE_CARD:
            const newCard = action.card;
            newCard.id = state.length;
            return state.concat(newCard);
        case UPDATE_CARD:
            const indexForUpdate = state.findIndex((item: any) => {
                return item.id === action.card.id;
            });
            const newStateForUpdate = [...state];
            newStateForUpdate[indexForUpdate] = action.card;
            return newStateForUpdate;
        case DELETE_CARD:
            const indexForDelete = state.findIndex((item: any) => {
                return item.id === action.id;
            });
            const newStateForDelete = [...state];
            newStateForDelete.slice(indexForDelete, 1);
            return newStateForDelete;
        default:
            return state;
    }
};

export default cards;