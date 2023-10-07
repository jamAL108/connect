import React,{useEffect, useState} from 'react'
import SegmentIcon from '@mui/icons-material/Segment';
import Cover from '../images/cover.png'
import Pp from '../images/pp.jpg'
import './navbar.css'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  // useEffect(()=>{
  //   const loc = window.location.href;
  //   const main = document.querySelector('.maan');
  //   const abt = document.querySelector('.abt');
  //   const cont = document.querySelector('.cont');
  //   if(!loc.includes('about') && !loc.includes('contact')){
  //       main.style.backgroundColor="#111828";
  //       abt.style.backgroundColor="transparent";
  //       cont.style.backgroundColor="transparent";
  //   }else{
  //     main.style.backgroundColor="transparent";
  //     abt.style.backgroundColor="transparent";
  //     cont.style.backgroundColor="transparent";
  //   }
  // },[])
  const navigate = useNavigate();
    const [mobile,setmobile]=useState(false);
    const [flag,setflag] = useState(false);
    useEffect(()=>{
      if(window.innerWidth<=700){
          setmobile(true);
          const ele = document.querySelector('.amin')
          ele.style.display='none';
      }
      setflag(false);
                  // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    useEffect(()=>{
      if(window.innerWidth<=700){
        setmobile(true);
      }else{
        setmobile(false);
      }
      setflag(false);
                  // eslint-disable-next-line react-hooks/exhaustive-deps
    },[window.innerWidth])
  return (
    <div className="navbar">
      {mobile===true && (
        <>
        {flag===false ? (
        <SegmentIcon className='icon' onClick={(e)=>{
          e.preventDefault()
          const ele = document.querySelector('.amin')
          ele.style.display='flex';
          setflag(true);
        }}/>)
      : (
        <CloseIcon className='icon' onClick={(e)=>{
          e.preventDefault()
          const ele = document.querySelector('.amin')
          ele.style.display='none';
          setflag(false);
        }} />
      )}
        </>
      )}
      <img className='cover' src={Cover} alt="cover" />
      <div className='amin'>
        <h2 className='maan' onClick={(e)=>{
          e.preventDefault()
          navigate('/');
        }}>main</h2>
        <h2 className='abt'  onClick={(e)=>{
          e.preventDefault()
          navigate('/about');
        }}>about</h2>
        <h2 className='cont' onClick={(e)=>{
          e.preventDefault()
          navigate('/contact');
        }}>contact</h2>
      </div>
        <img className='pp' src={Pp} alt="pp" />
    </div>
  )
}

export default Navbar