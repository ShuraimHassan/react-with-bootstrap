import React, { useState } from 'react'
import Book from './Components/BookList'

export default function App() {
  const [login, SetLogin] = useState(false); //set Login Values
  const bookList = [
    {
      id: 1,
      img: 'https://images-na.ssl-images-amazon.com/images/I/51b-JoV-1xS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
      title: 'The Last Thing He Told Me: A Novel',
      author: 'Laura Dave',
    },
    {
      id: 2,
      img: 'https://m.media-amazon.com/images/P/1138036331.01._SCLZZZZZZZ_SX500_.jpg',
      title: 'Motivation: Biological, Psychological, and Environmental',
      author: 'Lambert Deckers',
    },
    {
      id: 3,
      img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg',
      title: 'I Love You to the Moon and Back',
      author: 'Amelia Hepworth',
    },
    {
      id: 4,
      img: 'https://images-na.ssl-images-amazon.com/images/I/51bpkOgRHJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
      title: 'How the Word Is Passed: A Reckoning with the History of Slavery Across America',
      author: 'Clint Smith',
    },
  ]
  let returnBooks = () => {
    return bookList.map(book => {
      return (

        <Book key={book.id} {...book} />
      )
    }
    )
  }

  return (
    <>
      <center>
        {login === true ? returnBooks() : null}
        <button onClick={() => { SetLogin(!login) }} className='btn-sm btn btn-success'>{login === false ? 'Show' : 'Hide'}</button>
      </center>


    </>
  )

}

