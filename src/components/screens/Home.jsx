import React from 'react'

import About from '../About'
import WelcomeBoxes from '../WelcomeBoxes'
import ServicesCards from '../ServicesCards'
import Landing from '../Landing'

import InfiniteCarasoul from '../InfiniteCarasoul'

const Home = () => {
  document.title = 'Utilitiessave - Electricity in UK | Gas in UK'
  return (
    <main className='flex flex-col items-center -mt-24'>
      {/* landing */}
      <Landing />
      {/* two boxes */}
      <WelcomeBoxes />
      {/* About Us */}
      <About />
      {/* 3 cards */}
      <ServicesCards />
      {/* cards */}
      <InfiniteCarasoul />
    </main>
  )
}

export default Home
