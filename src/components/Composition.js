import React from 'react'
import Greet from './Greet'

function Composition({name, heroName}) {
  return (
    <div>
      <Greet name={name} heroName={heroName} />
      <p>This is additional text</p>
    </div>
  )
}

export default Composition
