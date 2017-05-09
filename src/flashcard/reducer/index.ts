import jsCore from './initState/jsCore';

/**
 * Дефолтнове состояние Redux-хранилища
 */
const initState = [
    {
        id: 0,
        title: 'JavaScript Core',
        decsription: '',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        cards: jsCore,
    },
    {
        id: 2,
        title: 'JavaScript Core',
        decsription: '',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        cards: [],
    },
    {
        id: 3,
        title: 'JavaScript Core',
        decsription: '',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        cards: [],
    },
    {
        id: 4,
        title: 'JavaScript Core',
        decsription: '',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        cards: [],
    },
    {
        id: 5,
        title: 'JavaScript Core',
        decsription: '',
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
            return state;
};

export default flashcards;