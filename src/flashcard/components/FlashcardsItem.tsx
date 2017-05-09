import * as React from 'react';

const {Link} = require('react-router');
const {Thumbnail, Button} = require('react-bootstrap');

class FlashcardsItem extends React.Component<any, any> {

    render () {
        const {flashcard} = this.props;
        return (
            <div className="col-md-3 col-sm-6 col-xs-12">
                <Thumbnail src={flashcard.imageUrl} alt="242x200">
                    <h3>{flashcard.title}</h3>
                    <p>{flashcard.description}</p>
                    <p>
                        <Link className="btn btn-success" to={`/training/${flashcard.id}`}>Тренировка</Link>
                        <span>{' '}</span>
                        <Button as={Link} to={`/flashcard/${flashcard.id}`}bsStyle="default">Карточки</Button>
                    </p>
                </Thumbnail>
            </div>
        );
    }
}

export default FlashcardsItem;