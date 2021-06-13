/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import BookStore from './Components/BookList'
import { Books } from './Components/Books';
export default function App() {
  const [login, SetLogin] = useState(false); //set Login Values

  let arrOfBooks = () => {
    return Books.map(book => {
     return <BookStore key={book.id} {...book} />
    })
  }

  return (
    <>
      <center>
        {/* 
        This section is about toggle bar with amazon book store rendered
         {login === true ? returnBooks() : null}
        <button onClick={() => { SetLogin(!login) }} className='btn-sm btn btn-success'>{login === false ? 'Show' : 'Hide'}</button> */}
      </center>
      <section className="container card-body card">
        <div>
            {arrOfBooks()}
        </div>
      </section>

    </>
  )

}

