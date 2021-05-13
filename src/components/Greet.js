import React from 'react'

const Greet = ({name, heroName}) => {
  return (
  <div>
    <h1>
      Welcome {name} a.k.a {heroName}
    </h1>
  </div>
  )
}

export default Greet