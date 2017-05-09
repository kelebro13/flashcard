import * as React from 'react';
const {connect} = require('react-redux');

import FlashcardsItem from './components/FlashcardsItem';

class FlashcardsPage extends React.Component<any, any> {

    renderFlashcards = () => {
        const {flashcards} = this.props;
        let template;
        if (flashcards) {
            template = flashcards.map((item: any, index: number) => {
                return <FlashcardsItem key={index} flashcard={item}/>;
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
                    {this.renderFlashcards()}
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        flashcards: state.flashcards,
    };
};

export default connect(mapStateToProps)(FlashcardsPage);