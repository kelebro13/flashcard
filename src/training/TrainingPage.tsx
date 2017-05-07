import * as React from 'react';
const {Navbar, Jumbotron, ProgressBar} = require('react-bootstrap');

import "bootswatch/superhero/bootstrap.css";

class TrainingPage extends React.Component<any, any> {
    render() {
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
                        <p style={{color: "#5cb85c"}}>Вопрос</p>
                        <p>{arr[0].description}</p>
                    </Jumbotron>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="btn-group btn-group-justified">
                                <a href="#" className="btn btn-success"><i
                                    className="glyphicon glyphicon-menu-left"/></a>
                                <a href="#" className="btn btn-success">Ответ</a>
                                <a href="#" className="btn btn-success">
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

export default TrainingPage;
