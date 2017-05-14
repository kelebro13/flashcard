export const CREATE_FLASHCARD = 'CREATE_FLASHCARD';
export const UPDATE_FLASHCARD = 'UPDATE_FLASHCARD';
export const DELETE_FLASHCARD = 'DELETE_FLASHCARD';

export const flashcardAction = {
    createFlashcard (flashcard: any) {
        return {
            type: CREATE_FLASHCARD,
            payload: flashcard
        };
    },

    updateFlashcard (flashcard: any) {
        return {
            type: UPDATE_FLASHCARD,
            payload: flashcard
        };
    },

    deleteFlashcard (id: number) {
        return {
            type: DELETE_FLASHCARD,
            payload: id
        }
    }
};
