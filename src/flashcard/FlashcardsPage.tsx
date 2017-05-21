import * as React from 'react';
import {bindActionCreators} from 'redux';
const {Link} = require('react-router');
const {connect} = require('react-redux');
import {Button, Item, Icon} from 'semantic-ui-react'
import FlashcardsItem from './components/FlashcardsItem';
import {flashcardAction} from "./actions/FlashcardsAction";

class FlashcardsPage extends React.Component<any, any> {

    renderFlashcards = () => {
        const {flashcards, action:{deleteFlashcard}} = this.props;
        let template;
        if (flashcards) {
            template = flashcards.map((item: any, index: number) => {
                return <FlashcardsItem key={index} flashcard={item} deleteFlashcard={deleteFlashcard}/>;
            });
        } else {
            template = <p>К сожадению колод нет :(</p>;
        }
        return template;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-left">
                        <h1>Колоды</h1>
                        <Button as={Link} to={`/flashcard/edit/${'new'}`}>
                            Новая колода
                            <Icon name='right plus'/>
                        </Button>
                        <hr/>
                    </div>
                </div>
                <Item.Group divided>
                    {this.renderFlashcards()}
                </Item.Group>
            </div>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        flashcards: state.flashcards,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        action: bindActionCreators(flashcardAction, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardsPage);