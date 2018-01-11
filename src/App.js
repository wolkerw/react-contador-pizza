import React, { Component } from 'react';
import logo from './logo.svg';

// Import default Bootstrap 4 CSS
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { Button, Row, Col, Container } from 'reactstrap';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pedacos: 0
        }
    }

    adicionar = () => this.setState(
                {pedacos: this.state.pedacos + 1}
        );
            zerar = () => this.setState(
                {pedacos: this.state.pedacos = 0}
        );
            render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <img src={'/img/img-pizza.png'} className="App-logo" alt="logo" />
                        <h1 className="App-title">Contador de pedaços de pizza</h1>
                    </header>
                    <Container>
                        <Row>
                            <Col>
                                <p className="txt-1">Clique no círculo para adicionar um pedaço</p>
                                <p className="pedacos" onClick={this.adicionar}>{this.state.pedacos}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button className="btn-zerar" color="danger" onClick={this.zerar}>Zerar</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                );
    }
}

export default App;
