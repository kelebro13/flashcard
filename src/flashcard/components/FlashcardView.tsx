import * as React from 'react';
const {connect} = require('react-redux');

class FlashcardView extends React.Component<any, any> {

    renderCardRow () {
        const {flashcard:{cards}} = this.props;
        let template = cards.map((item: any) => {
            return <li>{item.question}</li>
        })
        return (
            <ul>
                {template}
            </ul>
        );
    }

    render() {
        const {flashcard} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <img src={flashcard.imageUrl} className="fl-logo"/>
                    </div>
                    <div className="col-sm-9 text-left">
                        <h1>{flashcard.title}</h1>
                        <p className="lead">{flashcard.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-left">
                        <hr/>
                        <h2>Карточки</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-left">
                    {this.renderCardRow()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    const flashcardId = parseInt(ownProps.params.id, 10);
    return {
        flashcard: { ...state.flashcards.find((item: any) => {
            return item.id === flashcardId;
        }) }
    };
};

export default connect(mapStateToProps)(FlashcardView);