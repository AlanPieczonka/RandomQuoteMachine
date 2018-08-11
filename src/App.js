import React, { Component } from 'react';

import { API_URL, TWITTER_URL } from './urls';
import { QuoteBox, Quote, Author, ButtonWrapper, Button } from './components';

class App extends Component {

  state = {
    quote: '',
    author: ''
  }

  componentDidMount() {
    this.fetchNewQuote();
  }

  fetchNewQuote = async () => {
    const response = await fetch(API_URL)
    const { quote, author } = await response.json()

    return this.setState({ quote, author })
  };

  render() {
    const { quote, author } = this.state;
    return (
        <QuoteBox>
          <Quote>
            {quote}
          </Quote>
          <Author>
            {author}
          </Author>
          <ButtonWrapper>
            <Button onClick={this.fetchNewQuote}>
              New Quote
            </Button>
            <a href={`${TWITTER_URL}${quote + ' ' + author}`} target="_blank">
              <Button twitter>
                Tweet Quote
              </Button>
            </a>
          </ButtonWrapper>
        </QuoteBox>
    );
  }
}

export default App;
