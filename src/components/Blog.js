import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function Blog(props){
    const {match,posts}=props
    const history =useHistory()
    let hasmatch = match.params.topicId && posts.filter((post)=>post.title===match.params.topicId.split('-').join(" ")),article;
    
    if(hasmatch && hasmatch.length)
    article= hasmatch[0]

    return(
        <div style={{display: "flex",flexDirection: "column",alignItems: "center"}}>
            <h2> Blog</h2>
              {
             article && article.hasOwnProperty("id")?
              <div>
                  <h2>{article.title}</h2>
                  <p>{article.content}</p>
              </div>
              :
              hasmatch && hasmatch.length===0?
              <div>Post not found</div>
              :
              posts.map(post=>{
                 return (
                 <div style={{display:"flex", width:'60%',maxHeight: "200px", marginBottom: "20px",justifyContent:'center',alignContent:"center",alignItems: "center", cursor:"pointer"}} onClick={()=> history.push(`${match.path}/${post.title.split(' ').join("-")}`)}>
                     <div style={{maxWidth:'100%'}}>
                        <img src={post.image}  alt="" style={{width:'100%'}}/>
                     </div>
                     <div>
                        <div>{post.title}</div>
                        <div>{post.content}</div>
                        <div>
                            <div></div>
                        </div>
                     </div>
                 </div>
                 )
              })}

          
        </div>
    )
}

export default Blog