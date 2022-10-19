import { useState,useEffect } from "react";
import Post from "../post";
import axios from "axios";




function Home() {

    const [posts, setPosts]=useState([])

  useEffect(()=>{

  axios.get("https://newsapi.org/v2/everything?q=Pakistan&from=2022-10-15&sortBy=popularity&apiKey=5aaee74ce41d47868123aae296ff3ede")
  .then(Response =>{
   console.log("response", Response.data.articles)

   setPosts(Response.data.articles)

  })
  .catch(err =>{
    console.log("err", err)
  })

  },[])

    return (

        <div className="home">
         {
            posts.map((eachPost, i) =>(
              <>
                <Post name={eachPost.author}
                     postDes={eachPost.title}
                 postText={eachPost.description} />
              </>
            ))
            
         }
        </div>

        
    )
}
export default Home;