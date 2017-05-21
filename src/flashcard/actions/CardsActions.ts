export const CREATE_CARD = 'CREATE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const cardActions = {
    createCard (card: any) {
        return{
          type: CREATE_CARD,
            card
        };
    },

    updateCard (card: any) {
        return {
          type: UPDATE_CARD,
            card
        };
    },

    deleteCard (card: any) {
        return {
            type: DELETE_CARD,
            card
        }
    }
};

