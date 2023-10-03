import React, { useEffect ,useState } from 'react'
import fetchAndStoreDataFromGitHubFolder from '../utils/getdata';
const Blog = () => {
    const [content , setcontent] = useState({});
    useEffect(()=>{
       const url = JSON.parse(localStorage.getItem("blogname"));
       fetchAndStoreDataFromGitHubFolder(url);
    },[])
  return (
    <div className="Blog">

    </div>
  )
}

export default Blog