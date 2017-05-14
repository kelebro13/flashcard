import * as React from 'react';
import { Form, Input, Button } from 'semantic-ui-react'
const {connect} = require('react-redux');
const {isNaN} = require('lodash');
class FlashcardEditPage extends React.Component<any, any> {
    render () {
        const {flashcard} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>{flashcard.id ? 'Редактирование колоды' : 'Создание колоды'}</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-5">
                    <Form size="big">
                        <Form.Field id='form-input-control-first-name' control={Input} label='Название' placeholder='Название' />
                        <Form.Field id='form-input-control-last-name' control={Input} label='Описание' placeholder='Описание' />
                        <Form.Field id='form-input-control-last-name' control={Input} label='Логотип' placeholder='Логотип' />
                        <Form.Field id='form-button-control-public' control={Button} content='Confirm' label='Сохранить' />
                    </Form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    const flashcardId = parseInt(ownProps.params.id, 10);
    let flashcard = {}
    if(!isNaN(flashcardId)){
        flashcard = {...state.flashcards.find((item: any) => {
            return item.id === flashcardId;
        })}
    }
    return flashcard;
}

export default connect(mapStateToProps)(FlashcardEditPage);