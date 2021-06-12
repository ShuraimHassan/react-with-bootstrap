import React from 'react'


export default function ArrayMpingPractice() {
  const biodata = [

    {
      banana: 'bananna',
      mango: 'mango'
    },
    {
      banana: 'bananna',
      mango: 'mango'
    },

  ];
  console.log(biodata.filter(i => i.mango === 'mango'))
  return (
    <center>
      <ul>
      
      </ul>
    </center>
  )
}
