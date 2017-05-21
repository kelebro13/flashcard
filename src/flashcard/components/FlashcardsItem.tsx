import * as React from 'react';

const {Link} = require('react-router');
import { Button, Icon, Item } from 'semantic-ui-react'

class FlashcardsItem extends React.Component<any, any> {

    handleClick = () => {
        const {flashcard, deleteFlashcard} = this.props;
        deleteFlashcard(flashcard);
    };

    render () {
        const {flashcard} = this.props;
        return (
            <Item>
                <Item.Image size='tiny' src={flashcard.imageUrl} />

                <Item.Content>
                    <Item.Header as='a'>{flashcard.title}</Item.Header>
                    <Item.Meta>
                        <span className='cinema'>{`Карточек: ${flashcard.cards.length}`}</span>
                    </Item.Meta>
                    <Item.Description>{flashcard.description}</Item.Description>
                    <Item.Extra>
                        <Button color='red' floated='right' onClick={this.handleClick}>
                            Удалить
                            <Icon name='right remove' />
                        </Button>
                        <Button as={Link} to={`/flashcard/edit/${flashcard.id}`} floated='right'>
                            Изменить
                            <Icon name='right write' />
                        </Button>
                        <Button as={Link} to={`/training/${flashcard.id}`} color='green' size='big' floated='right'>
                            Тренировка
                            <Icon name='right checkmark' />
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}

export default FlashcardsItem;