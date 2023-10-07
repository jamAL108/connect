import React, { useEffect ,useState } from 'react'
import dateformat from '../utils/DateFormatter';
import fetchAndStoreDataFromGitHubFolder from '../utils/getdata'
import markdownToHtml from "../utils/markdownToHtml";
import './blog.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Skeleton from '../components/skeleton';
import Data from '../utils/prev';
const Blog = () => {
    useEffect(()=>{
      const main = document.querySelector('.maan');
      const abt = document.querySelector('.abt');
      const cont = document.querySelector('.cont');
      main.style.backgroundColor="transparent";
      abt.style.backgroundColor="transparent";
      cont.style.backgroundColor="transparent";
    },[])

    const [content , setcontent] = useState("");
    const [info , setinfo]= useState([]);
    useEffect(()=>{
      // if(JSON.parse(localStorage.getItem('blog'))!==null){
      //  setinfo(JSON.parse(localStorage.getItem("blog")));
      // }else{
          const param = window.location.href;
          let substringAfterLastSlash;
          let lastSlashIndex = param.lastIndexOf('/');
          if (lastSlashIndex !== -1) {
          substringAfterLastSlash = param.substring(lastSlashIndex + 1)
          // console.log(substringAfterLastSlash);
          // let temp  = substringAfterLastSlash.replace(/%20/g, '-');
          console.log(substringAfterLastSlash)
          let matchingObject = Data.find(obj => obj.github.includes(substringAfterLastSlash));
          setinfo(matchingObject);
        }
      // }
        // eslint-disable-next-line
    },[])
    useEffect(()=>{
      console.log(info);
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