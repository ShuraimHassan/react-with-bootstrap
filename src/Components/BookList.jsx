import React from 'react';
import { Card } from 'react-bootstrap';

const BookList = (props) => {
  const { img, title, author } = props;


  return (<>
    <article>

      <Card style={{ width: '12rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Author- {author}
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  </>
  );
}

export default BookList;