import React, { useState } from 'react'
import {Posts} from './Posts'

function Blog(){
    const [posts, setPosts] = useState(Posts)
    console.log(posts);
    return(
        <>
            <h2> Blog</h2>
              {posts.map(post=>{
                 return <div>{post.title}</div>
              })}

          
        </>
    )
}

export default Blog