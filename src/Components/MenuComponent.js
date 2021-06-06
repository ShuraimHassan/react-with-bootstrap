import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardImgOverlay,
} from 'reactstrap';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
      comState: null
    }
  }


  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }
  onComments(comment) {
    console.log(comment.comments)
    this.setState({ comState: comment.comments });
  }


  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }
  renderComments(comment) {
    if (comment != null)
      return (
        <Card>
          <CardBody>
            <CardText>{comment.comments}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (

        <div key={dish.id} className="col-6 col-md-5 m-1">
          <Card key={dish.id}
            onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>

      );
    });
    const com = this.props.com.map(comment => {
      console.log('commet box')
      return (
        < div key = { comment.id } className = "col-6 col-md-5 m-1" >
          <Card key={comment.id}
            onClick={() => this.onComments(comment)}>
            <div>Auther {comment.auther}</div>
            <div>Ratting {comment.ratting}</div>
            <div>Comment {comment.comment}</div>
            <div>Date {comment.date}</div>

          </Card>
        </div >


      );
  });

  return(
      <div className = "container" >
        <div className="row">
          {menu}

        </div>
        <div className="row">
          <div className="col-5 col-md-5 m-1">
            {this.renderDish(this.state.selectedDish)}
          </div>

        </div>
        <div className="row">
          {com}
          <div className="col-7 col-md-7 m-1">
            {this.renderComments(this.state.comState)}
          </div>

        </div>
      </div>
    );
  }
}

export default Menu;