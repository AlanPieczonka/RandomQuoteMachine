import styled from 'styled-components';

const QuoteBox = styled.main`
  margin: 10vh auto 0 auto;
  text-align: center;
`

const Quote = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55vw;
  height: 15vh;
  margin: 0 auto;
  padding: 10vw;
  font-size: 1.4rem;
  border: 1px solid black;
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`

const Author = styled.h1`
  font-size: 1.4rem;
  text-align: center;
`

const ButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const Button = styled.button`
  width: 25vw;
  height: 15vh;
  font-size: 1rem;
  border-radius:7px;
  color:#ffffff;
  text-decoration:none;
  cursor: pointer;
  background-color: ${({ twitter }) => twitter ? '#2D8BE6' : '#57AD68'};
`

export { QuoteBox, Quote, Author, ButtonWrapper, Button }
