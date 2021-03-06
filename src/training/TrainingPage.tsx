import * as React from 'react';
const {connect} = require('react-redux');
const Markdown = require('react-markdown');

/**
 * Для тестов
 * http://www.reactexamples.com/react-markdown-editor/
 * @returns {string}
 */
function getDefaultSource() {
    return [
            '# markdown-editor', '',
            'Super simple markdown editor/previewer, based on ',
            '[react-markdown](https://github.com/rexxars/react-markdown)',
            '',
            '**Note: HTML input is disabled in this editor, for now**',
            '',

            '## Flow', '',
            '* When source in the editor is changed:',
            '  * Callback is triggered',
            '  * Updates state on app component',
            '  * App component sets new source on preview component (react-markdown)',
            '  * Changes are reflected!',
            '* As a bonus, a debounced method stores the editor value to localStorage (if available)',
            '',

            '## License', '',
            '* MIT-licensed'
        ].join('\n');
}

class TrainingPage extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            cardIndex: 0,
            cards: [],
            isAnswer: false
        }
    }

    componentWillMount() {
        const {cards} = this.props.flashcard;
        const newCards = cards.sort(() => {
            return .5 - Math.random();
        });
        this.setState({
            cards: newCards
        });
    }

    handleClickAnswer = () => {
        this.setState({
            isAnswer: true
        });
    }

    handleChangeQuestion = (isNext: boolean = false) => {
        let currentIndex = this.state.cardIndex;
        this.setState({
            isAnswer: false,
            cardIndex: isNext ? ++currentIndex : --currentIndex
        });
    }

    // todo обработка ошибок - если например нету карточек
    render() {
        const {cards, isAnswer, cardIndex} = this.state;
        const cardQuestion = cards[cardIndex].question;
        const cardAnswer = cards[cardIndex].answer;
        const isFirstCard = cardIndex === 0;
        const isLastCard = cardIndex === (cards.length - 1);
        const cardIndexForText = cardIndex + 1;
        return (
            <div className="App">
                <div className="container">
                    <br/>
                    <div className=" training-card">
                    <div className="row training-card-content text-left">
                        <div className="col-xs-12">
                            <h1>{cardQuestion}</h1>
                        </div>
                        <div className="col-xs-12">
                            <Markdown
                                source={isAnswer ? cardAnswer : getDefaultSource()}
                                escapeHtml
                            />
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-xs-12 text-left">
                            <p>{`Вопрос ${cardIndexForText} из ${cards.length}`}</p>
                        </div>
                        <div className="col-sm-12">
                            <div className="btn-group btn-group-justified">
                                <a
                                    className="btn btn-success"
                                    onClick={this.handleChangeQuestion.bind(this, false)}
                                    disabled={isFirstCard}
                                >
                                    <i className="glyphicon glyphicon-menu-left"/>
                                </a>
                                <a className="btn btn-success" disabled={isAnswer} onClick={this.handleClickAnswer}>Ответ</a>
                                <a
                                    className="btn btn-success"
                                    onClick={this.handleChangeQuestion.bind(this, true)}
                                    disabled={isLastCard}
                                >
                                    <i className="glyphicon glyphicon-menu-right"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
// todo описать что такое ownProps
/**
 * сравнение не строгое, т.к. ownProps.params.id возвращает число в виде строки, в в redux id храниться как число
 * @param state
 * @param ownProps
 * @returns {{flashcard}}
 */
const mapStateToProps = (state: any, ownProps: any) => {
    const flashcardId = parseInt(ownProps.params.id, 10);
    return {
        flashcard: { ...state.flashcards.find((item: any) => {
            return item.id === flashcardId;
        }) }
    };
};

export default connect(mapStateToProps)(TrainingPage);
