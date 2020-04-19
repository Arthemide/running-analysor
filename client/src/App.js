import React, { Component } from 'react';
import logo from './lib.svg';
import './App.css';

class Header extends Component {

    constructor() {
        super();
        this.state = { name: "red" };
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Hello React {this.state.name} !</h1>
                <p>
                    Edit <code>src/App.js</code> and save to reload.</p>
                <a
                    className="App-link"
                    href="https://www.linkedin.com/in/rousselg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Follow me on Linkedin
                    </a>
            </header>
        );
    }
}

class Body extends Component {
    render() {
        return (
            <body className="App-body">
                <h1>Papa le big boss</h1>
                <p>Gireg est beau
                </p>

            </body>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <p>Bye React!</p>
            </footer>
        );
    }
}

class App extends Component {

    constructor() {
        super();
        this.state = { name: "red" };
    }

    render() {
        return (
            <div className="App">
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default App;
