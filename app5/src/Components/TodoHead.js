import React from 'react'

export default function TodoHead() {
  return (
    <form>
        <input type="text" placeholder='Add todo' className='head'></input>
        <button className='add'>Add</button>
    </form>
  )
}

