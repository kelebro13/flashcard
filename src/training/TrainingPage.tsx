import * as React from 'react';
const {connect} = require('react-redux');
const {ProgressBar} = require('react-bootstrap');

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

    getProgress = () => {
        const {cards, cardIndex} = this.state;
        const countCards = cards.length;
        // todo посмотреть вычисления в js
        const percent = 100 / countCards;
        const visualCardIndex = cardIndex + 1;
        const now = percent * visualCardIndex;
        return {
            now,
            label: `${visualCardIndex}/${countCards}`
        }
    }
    // todo обработка ошибок - если например нету карточек
    render() {
        const {cards, isAnswer, cardIndex} = this.state;
        const cardQuestion = cards[cardIndex].question;
        const cardAnswer = cards[cardIndex].answer;
        const isFirstCard = cardIndex === 0;
        const isLastCard = cardIndex === (cards.length - 1);
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-header">
                                <h1>Тренировка</h1>
                            </div>
                        </div>
                    </div>
                    <ProgressBar bsStyle="success" now={this.getProgress().now} label={this.getProgress().label}/>

                    <div className=" training-card">
                    <div className="row training-card-content text-left">
                        <div className="col-xs-12">
                            <h5 style={{color: '#5cb85c'}}>Вопрос</h5>
                        </div>
                        <div className="col-xs-12">
                            <p>{cardQuestion}</p>
                        </div>
                        <div className="col-xs-12">
                            <h5 style={{color: '#5cb85c'}}>{isAnswer ? 'Ответ' : ''}</h5>
                        </div>
                        <div className="col-xs-12">
                            <p className=" text-left">{isAnswer ? cardAnswer : ''}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
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
