import React from 'react';

const BioData = (props) => {
  const { name, age, proffesion } = props;
  const { sports, favBatsmen, favQuotes } = props.hobbies;
  const returnNum = () => {
    return props.num.map((x, index) => {
      return <i key={index}>{`${x} `}</i>
    })
  }
  return (
    <>
      <div className="container card card-body shaddow mb-2 ">
        <div className='row'>
          <div className="col-md-6">
            Nested Array of an array: {returnNum()}
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Proffesion: {proffesion}</h2>
            <div key={props.id} className="text-muted card-body container">
              <h5>Favourite Sports is {sports}</h5>
              <h5>Favourite Favourite Batsmen is {favBatsmen}</h5>
              <h5>Favourite Favourite Quote is <q>{favQuotes}</q> </h5>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default BioData;
