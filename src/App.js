import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    quote: "",
    author: ""
  }

  componentDidMount() {
    this.fetchNewQuote();
  }

  fetchNewQuote = () => {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(response => response.json())
      .then(({ quote, author }) => this.setState({ quote, author }));
  };

  render() {
    const { quote, author } = this.state;
    return (
      <div className="App">
        <div id="quote-box">
          <span id="text">{this.state.quote}</span>
          <span id="author">{this.state.author}</span>
          <button id="new-quote" onClick={this.fetchNewQuote}>New Quote</button>
          <button>
          <a href={`https://twitter.com/intent/tweet?text=${quote + ' ' + author}`} target="_blank">Tweet Quote</a>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
