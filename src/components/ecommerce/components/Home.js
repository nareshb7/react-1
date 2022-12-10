import React from 'react'
import Bill from './Bill'

const Home = () => {
  const bill = Bill
  return (
    <div>
      <iframe src={bill} title='Bill'></iframe>
    </div>
  )
}

export default Home