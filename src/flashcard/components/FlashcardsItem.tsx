import * as React from 'react';

const {Link} = require('react-router');
const {Thumbnail, Button} = require('react-bootstrap');

class FlashcardsItem extends React.Component<any, any> {

    render () {
        const {flashcard} = this.props;
        return (
            <div className="col-md-3 col-xs-6">
                <Thumbnail src={flashcard.imageUrl} alt="242x200">
                    <h3>{flashcard.title}</h3>
                    <p>{flashcard.description}</p>
                    <p>
                        <Button as={Link} to={`/training/${flashcard.id}`} bsStyle="primary">Тренировка</Button>&nbsp;
                        <Button as={Link} to={`/flashcard/${flashcard.id}`}bsStyle="default">Карточки</Button>
                    </p>
                </Thumbnail>
            </div>
        );
    }
}

export default FlashcardsItem;