import React from 'react'
import Navbar from '../components/navbar'
import './home.css'
import Footer from '../components/footer'
import GetAllBlog from '../components/getallblog'
const home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <GetAllBlog/>
        <Footer/>
    </div>
  )
}

export default home