import * as React from 'react';
import {Form} from 'semantic-ui-react';
import {bindActionCreators} from 'redux';
const {connect} = require('react-redux');
const {isNaN} = require('lodash');

// const {hashHistory} = require('react-router');

import {flashcardAction} from '../actions/FlashcardsAction';
import CardsView from "./card/CardsView";

const defaultFlashcard = {
    title: null,
    description: null,
    imageUrl: null
};

/**
 * Интерфейс для From.Input от библиотеки Semantic-ui
 * Примечание: если в тег добавить аттрибуты name и value, мы можем их получить через onChange
 * [string] name Имя поля.
 * [string] value Введеное значение.
 */
interface ISemanticInputData {
    name: string;
    value: string;
}

class FlashcardEditPage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            flashcard: props.flashcard || {...defaultFlashcard},
        }
    }

    handleChange = (e: any, data: ISemanticInputData) => {
        let currentFlashcard = {...this.state.flashcard};
        currentFlashcard[data.name] = data.value;
        this.setState({
            flashcard: {...currentFlashcard}
        });
    }

    /**
     * Метод для обработки нажатия на "Сохранить" после заполнения формы
     * Сначало он вызывает экшен создания новой колоды, после редиректит
     * на страницу со списком всех колод (новая колода должна появится)
     */
    handleMainSubmit = (e: any) => {
        e.preventDefault();
        const {createFlashcard, updateFlashcard} = this.props.action;
        const {flashcard} = this.state;
        !isNaN(parseInt(flashcard.id)) ? updateFlashcard(flashcard) : createFlashcard(flashcard);
        //стандартная реализация редиректа через react-router
        // hashHistory.push('/');
    };


    render() {
        const {flashcard} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>{flashcard ? 'Редактирование колоды' : 'Создание колоды'}</h1>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-5">
                        <Form size="big" onSubmit={this.handleMainSubmit}>
                            <Form.Input name='title' label='Название' value={flashcard.title}
                                        placeholder='Название'
                            onChange={this.handleChange}/>
                            <Form.Input name='description' label='Описание' value={flashcard.description}
                                        placeholder='Описание'
                                        onChange={this.handleChange}/>
                            <Form.Input name='imageUrl' label='Логотип' value={flashcard.imageUrl}
                                        placeholder='Логотип'
                                        onChange={this.handleChange}/>
                            <Form.Button content='Сохранить'
                                        label='Сохранить'/>
                        </Form>
                    </div>
                    <div className="col-xs-12">
                        <hr/>
                    </div>
                </div>
                <CardsView cards={flashcard.cards}/>
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    const flashcardId = parseInt(ownProps.params.id, 10);
    let flashcard;
    if (!isNaN(flashcardId)) {
        flashcard = {
            ...state.flashcards.find((item: any) => {
                return item.id === flashcardId;
            })
        }
    }
    return {flashcard};
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        action: bindActionCreators(flashcardAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardEditPage);