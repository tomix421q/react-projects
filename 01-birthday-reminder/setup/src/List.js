import React from 'react'

const List = (prop) => {
  const { peoplee } = prop
  return (
    <>
      {peoplee.map((person) => {
        const { id, name, age, image } = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{age} years</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
