import * as React from 'react';
const {Router, Route, IndexRoute, hashHistory} = require('react-router');

import App from './App';
import FlashcardsPage from './flashcard/FlashcardsPage';
import TrainingPage from './training/TrainingPage';
import FlashcardView from './flashcard/components/FlashcardView';
import FlashcardEditPage from "./flashcard/components/FlashcardEditPage";

const currentRoots = (
    <div>
        <Route path="/" component={App}>
            <IndexRoute component={FlashcardsPage}/>
            <Route path="training/:id" component={TrainingPage}/>
            <Route path="flashcard/edit/:id" component={FlashcardEditPage}/>
            <Route path="flashcard/:id" component={FlashcardView}/>
        </Route>
        {/*<Route path="*" component={NotFount}/>*/}
    </div>
);

/**
 * Роутинг приложения.
 *
 * Примечание: Стоит помнить что вложенные роуты примерно как конструкция switch
 * - который первый подойдет - тот и будет выведен
 *
 * @constructor
 */
const Root = () => (
    <Router history={hashHistory}>
        {currentRoots}
    </Router>
);

export default Root;
