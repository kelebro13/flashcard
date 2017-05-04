import * as React from 'react';
import TrainingFlashcards from "./components/TrainingFlashcards";

import "bootswatch/superhero/bootstrap.css";

const arr = [
    {
        title: 'test1',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        description: 'Тестовые данные'
    },
    {
        title: 'test2',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        description: 'Тестовые данные'
    },
    {
        title: 'test3',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        description: 'Тестовые данные'
    },
    {
        title: 'test4',
        imageUrl: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/javascript.svg',
        description: 'Тестовые данные'
    }
]

class TrainingPage extends React.Component<any, any> {
    render() {
        return (
            <div className="container">
                <div className="row">
            <TrainingFlashcards flashcards={arr}/>
                </div>
            </div>
        );
    }
}

export default TrainingPage;