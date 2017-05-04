import * as React from 'react';

const {Thumbnail, Button} = require('react-bootstrap');

class TrainingFlashcards extends React.Component<any, any> {

    renderFlashcard = () => {
        const {flashcards} = this.props;

        let template;

        if (flashcards) {
            template = flashcards.map((item: any, index: number) => {
                return <div key={index} className="col-md-3 col-xs-6">
                    <Thumbnail src={item.imageUrl} alt="242x200">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>
                            <Button bsStyle="primary">Тренировка</Button>&nbsp;
                            <Button bsStyle="default">Карточки</Button>
                        </p>
                    </Thumbnail>
                </div>
            })
        } else {
            <p>К сожадению колод нет :(</p>
        }
        return template;
    };

    render () {
        return (
            <div>
                {this.renderFlashcard()}
            </div>
        );
    }
}

export default TrainingFlashcards;