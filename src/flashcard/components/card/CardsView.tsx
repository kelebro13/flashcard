import * as React from 'react';
import {Accordion, Icon, Form, Button, Segment} from 'semantic-ui-react';
const Markdown = require('react-markdown');

class CardsView extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            showCardForm: false
        }
    };

    /**
     * Метод для открытия формы создания новой карточки
     */
    toggleCardForm = () => {
        this.setState({
            showCardForm: !this.state.showCardForm
        })
    };

    /**
     * Редеринг карточек колоды ввиде аккардиона.
     *  todo разрешить проблему в необходимости оборачивать в Accordion какждый элемент
     */
    renderCardsAccordion () {
        const {cards} = this.props;
        let tempalte;
        if(cards && cards.length) {
            tempalte = cards.map((item: any, index: number) => {
                return (
                    <Accordion>
                        <Accordion.Title>
                            <Icon name='dropdown' />
                            {item.question}
                        </Accordion.Title>
                        <Accordion.Content>
                            <Markdown
                                source={item.answer}
                                escapeHtml
                            />
                            <br/>
                        </Accordion.Content>
                    </Accordion>
                );
            })
        }
        return (
            <div>
                {tempalte}
            </div>
        );
    };

    render () {
        const {showCardForm} = this.state;
        return (
            <div>
        <div className="row" style={{marginBottom: 10}}>
            <div className="col-xs-12">
                <h2>Карточки</h2>
                <Button onClick={this.toggleCardForm} disabled={showCardForm}>Создать</Button>
            </div>
        </div>
        <div className="row">
            {
                showCardForm &&
            <div className="col-xs-12">
                <Segment>
                    <Form size="big" onSubmit={this.toggleCardForm}>
                        <Form.Input name='question' label='Вопрос'
                                    placeholder='Вопрос'
                                    onChange={() => {}}/>
                        <Form.TextArea name='answer' label='Ответ (Markdown)'
                                       placeholder='Ответ'
                                       onChange={() => {}}/>
                        <Form.Button content='Сохранить'
                                     label='Сохранить'/>
                    </Form>
                </Segment>
            </div>
    }

    </div>
    {/*accordion*/}
        <div>
            {this.renderCardsAccordion()}
        </div>
            </div>
        );
    }
};

export default CardsView;