import React, { useEffect ,useState } from 'react'
import dateformat from '../utils/DateFormatter';
import fetchAndStoreDataFromGitHubFolder from '../utils/getdata'
import markdownToHtml from "../utils/markdownToHtml";
import './blog.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Skeleton from '../components/skeleton';
const Blog = () => {
    const [content , setcontent] = useState("");
    const [info , setinfo]= useState([]);
    useEffect(()=>{
       setinfo(JSON.parse(localStorage.getItem("blog")));
        // eslint-disable-next-line
    },[])
    useEffect(()=>{
       func();
        // eslint-disable-next-line
    },[info])
    const func =async()=>{
      if(Object.keys(info).length!==0){
        const temp = await fetchAndStoreDataFromGitHubFolder(info.github);
        const cont = await markdownToHtml(temp || "");
        setcontent(cont);
      }
    }
    useEffect(()=>{
      console.log(content);
       // eslint-disable-next-line
   },[content])
  return (
    <div className="Blog">
      <Navbar/>
      {content.length!==0 ? (
        <>
        <div className="box" >
        <h1>{info.title}</h1>
        <div className="queue">
        <p>{dateformat(info.date)}</p>-
        <p>{info.author}</p>
        </div>
      </div>

          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </>
          ) : (
            <Skeleton/>
          )}
          <Footer/>
        </div>
  )
}

export default Blog