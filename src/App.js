import React, { useState } from 'react';
import Homepage from './components/Homepage';
import Blog from './components/Blog'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import {Posts} from './components/Posts'
import second from "./asserts/sec.webp"
function App() {
  const [posts, setPosts] = useState([...Posts])
  
const addBlog = ()=>{
console.log("YOUR ARE TRYING TO ADD NEW BLOG");
     const newPost = [...posts,{
      "id":Math.random(20),
      "title" : "Random Post",
      "author": "Adjoa",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "upvote" : 0,
      "downvote" : 0,
      'image': second,
      "comments": [
          {
              id: 1,
              userId: 212,
              comment: "What the fuck are we doing here!"
          },
          {
              id: 1,
              userId: 212,
              comment: "What the fuck are we doing here!"
          }
      ]
  }]
  setPosts(newPost)
  }
  return (
    < >
       <button onClick={addBlog}>Add Blog</button>
        <Router>
          <Navbar/>
            <Switch>
                  <Route exact path='/' component={Homepage}/>
                  <Route exact path='/blog' render={(props)=><Blog {...props}  posts={posts} />}/>
                  <Route path='/blog/:topicId' render={(props)=><Blog {...props}  posts={posts} />}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
