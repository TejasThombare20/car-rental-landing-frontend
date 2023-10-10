import React from 'react'
import Header from './Header'
import Card from './Card'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='mx-6 my-1 flex flex-col justify-center items-center gap-8 '>
        <Header/>
        <Card/>
        <Footer/>
    </div>
  )
}

export default Main