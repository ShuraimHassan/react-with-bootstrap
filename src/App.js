import React, { Component , Fragment } from 'react'
import Book from './Components/BookList'
import { Container, Row, Col } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 'https://images-na.ssl-images-amazon.com/images/I/51b-JoV-1xS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
      title: 'The Last Thing He Told Me: A Novel',
      author: 'Laura Dave',
      array:''
    }
  }
  render() {
    return (
      <>

        <Container>
          <Row>
            <Col xs={12} md={2}>
              <Book img={this.state.img} title={this.state.title} author={this.state.author} />
            </Col>
           
          </Row>
        </Container>
      </>

    )
  }
}
