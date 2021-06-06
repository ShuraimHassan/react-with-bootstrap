import React from 'react';
import { Card } from 'react-bootstrap';

const BookList = ({ img, title, author }) => {

  return (
    <div className='container'>
      <Card style={{ width: '9rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Author- {author}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookList;
