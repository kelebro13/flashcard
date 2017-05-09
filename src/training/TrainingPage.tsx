import * as React from 'react';
const {connect} = require('react-redux');
const {Navbar, Jumbotron, ProgressBar} = require('react-bootstrap');

class TrainingPage extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = {
            cardIndex: 0,
            cards: [],
            isAnswer: false
        }
    }

    componentDidMount() {
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

    render() {
        const {cards, isAnswer, cardIndex} = this.state;
        const cardQuestion = cards[cardIndex].question;
        const cardAnswer = cards[cardIndex].answer;
        return (
            <div className="App">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            React Simple Flashcard App
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="page-header">
                                <h1>
                                    Тренировка
                                </h1>
                            </div>
                        </div>
                    </div>
                    <ProgressBar bsStyle="success" now={40} label="40/100"/>
                    <Jumbotron>
                        <p style={{color: '#5cb85c'}}>{isAnswer ? 'Ответ' : 'Вопрос'}</p>
                        <p>{isAnswer ? cardAnswer : cardQuestion}</p>
                    </Jumbotron>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="btn-group btn-group-justified">
                                <a className="btn btn-success" onClick={this.handleChangeQuestion.bind(this, false)}>
                                    <i className="glyphicon glyphicon-menu-left"/>
                                </a>
                                <a href="#" className="btn btn-success" disabled={isAnswer} onClick={this.handleClickAnswer}>Ответ</a>
                                <a href="#" className="btn btn-success" onClick={this.handleChangeQuestion.bind(this, true)}>
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
