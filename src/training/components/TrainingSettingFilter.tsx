import * as React from '@types/react';

class TrainingSettingFilter extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            step: 'SELECT_FLASHCARD'
        };
    }

    /**
     * Метод изменения текущего шага
     * @param {any} step Шаг.
     */
    changeStep = (step: any) => {
        this.setState({
            step
        });
    }

    renderSelectStep = () => {
        const {flashcards} = this.props;

        let template;

        flashcards && flashcards.map((item, index) => {
            template
        })

        return (
            <table className="table table-striped table-hover ">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                    <th>Column heading</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                </tr>
                </tbody>
            </table>
        );
    }

    renderSortStep = () => {

    }

    renderCountStep = () => {

    }

    /**
     * Метода возврата нужного метода в зависимости от текущего шага
     */
    renderFilterStep = () => {
        const {step} = this.state;
        switch (step) {
            case 'SELECT_FLASHCARDS':
                return this.renderSelectStep();
            case 'SELECT_SORT':
                return this.renderSortStep();
            case 'SELECT_COUNT':
                return this.renderCountStep();
        }
    }

    render () {
        return (
            <div>
                {this.renderFilterStep}
            </div>
        );
    }
}

export default TrainingSettingFilter;