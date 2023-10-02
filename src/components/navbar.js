import React,{useEffect, useState} from 'react'
import SegmentIcon from '@mui/icons-material/Segment';
import Cover from '../images/cover.png'
import Pp from '../images/pp.jpg'
import './navbar.css'
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
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
        <h2>main</h2>
        <h2>about</h2>
        <h2>contact</h2>
      </div>
        <img className='pp' src={Pp} alt="pp" />
    </div>
  )
}

export default Navbar