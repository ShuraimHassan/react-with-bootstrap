import React from 'react'
import { Profile } from '../Js/name';
import BioData from './PrintNameArr'

function HandleNameComponent() {

  const data = () => {
    return Profile.map(Profile => {
      
      return <BioData key={Profile.id} {...Profile} />
    })
  }
  return (
    <div>
      {data()}
    </div>
  )
}

export default HandleNameComponent
