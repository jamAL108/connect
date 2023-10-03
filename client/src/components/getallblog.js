import React from 'react'
import Prev from '../utils/prev';
import './getallblogs.css'
import { useNavigate } from 'react-router-dom';
const GetAllBlog = () => {
  const navigate = useNavigate();
  console.log(Prev);
  return (
    <div className="getallblog">
      <div className="real">
      <h1>All Releases</h1>
      <div className="boxes">
    {Prev.length!==0 &&(
     Prev.map((data,idx)=>(
      <div key={idx} className="box" onClick={(e)=>{
        e.preventDefault()
        localStorage.setItem("blogname",JSON.stringify(data.github));
        navigate(`/blogs/${data.title}`)
      }}>
        <img src={data.coverImage} alt="gre" />
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <h2>{data.excerts}</h2>
      </div>
    )))}
    </div>
    </div>
    </div>
  )
}

export default GetAllBlog