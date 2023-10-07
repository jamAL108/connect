import React,{ useEffect } from 'react'
import Navbar from '../components/navbar'
import './home.css'
import Footer from '../components/footer'
import GetAllBlog from '../components/getallblog'
const Home = () => {
  useEffect(()=>{
    // const loc = window.location.href;
     const main = document.querySelector('.maan');
     const abt = document.querySelector('.abt');
     const cont = document.querySelector('.cont');
    // if(!loc.includes('about') && !loc.includes('contact')){
        main.style.backgroundColor="#111828";
        abt.style.backgroundColor="transparent";
        cont.style.backgroundColor="transparent";
    // }else{
    //   main.style.backgroundColor="transparent";
    //   abt.style.backgroundColor="transparent";
    //   cont.style.backgroundColor="transparent";
    // }
  },[])
  return (
    <div className='home'>
        <Navbar/>
        <GetAllBlog/>
        <Footer/>
    </div>
  )
}

export default Home