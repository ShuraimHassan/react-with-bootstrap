import React, { useState } from 'react';
// import { data } from '../../../data';
import { Profile } from '../../../Js/name';

const UseStateArray = () => {
  const [people, setPeople] = useState(Profile);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const clearList = (id) => setPeople([]);
  const recoverData = (id) => setPeople(Profile);


  return (
    <>
      {people.map(({ id, name, age, proffesion, ...props }) => {

        return (
          <div key={id}  className='container card card-body btn-sm '>
            <h4>{name} is old of {age} and his/her working as {proffesion}</h4>
            <h5 >Favourite Quote-<q>{props.hobbies.favQuotes}</q></h5>
            <button className='btn-sm btn' onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className='btn' onClick={clearList}>
        Remove All
      </button>
      <button className='btn' onClick={recoverData}>
        Recover Data
      </button>
    </>
  );
};

export default UseStateArray;
