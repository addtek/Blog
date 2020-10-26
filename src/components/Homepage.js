import React from "react"
import '../styles/Homepage.css'
import first from "../asserts/bg.webp"
import sec from "../asserts/bg.webp"

function Navbar(){
    return(
        <>
        <div>
            <nav >
                <ul className='nav-item'>
                    <li className='nav-list-left' >Juvian maker space</li>
                        <div className='right'>
                            < li className='nav-list'>Home</ li>
                            < li className='nav-list'>Blog</ li>
                            < li className='nav-list'>Electronics 101</ li>
                        </div>
                </ul>
            </nav>
       
        <div className='main-imagecontainer'>
           <div className='image-container'> 
                <img  className='back' style={{width:'100%'}} src={first} alt='img back'/>
           </div>
  
        <div className='welcome'>
                <h2>Welcome</h2>
                <h4>A place for Hands on Creativity</h4>

                <p>Are you ready for a challenging, exciting and somewhat messy experience? Welcome to Juvian maker space, where the tools are ours but the vision is solely yours. For information about our workshops and our community, browse our site below.</p>
                 <p>Get in Touch</p>
        
        </div>
        </div>
         


        <div className='about-container'>

        <div className='about-text'>
            <h1>About Juvian maker space</h1>
            <h4>Passionate & Professional</h4>
            <p>Ever dreamed of crafting your own piece of furniture or creating your first 3D artwork? Welcome to Juvian maker space, where we provide the equipment and the knowledge to make your dreams come true. Situated in Koforidua since 2020, our community of makers is always looking for new members, so take a look at our classes schedule and book your visit to our Makerspace today.</p>
        </div>
        </div>
        
        <div className='workshops'>
            <div className='workshop-title'>
                <h2>Workshops at Juvian maker space</h2>
                <h4>Try Something New</h4>
            </div>
         <div className='details-container'>
            <div className='workshop-info'>
                <div className='details'> 
                        <h3>3D Printing for Families</h3>
                        <h3>Let Your Creativity Run Wild</h3>
                        <p>Discover the incredible resources on offer to all our members and visitors at Juvian maker space. These classes fill up fast so sign up as soon as possible. If you’d like to find out more about costs and requirements for this course - contact us today.</p>
                </div>
          
                <div className='details-image'>

                </div>
                </div>

                <div className='workshop-info'>
                <div className='details'> 
                        <h3>Leather Basics</h3>
                        <h3> Where Will it Take You?</h3>
                        <p>Take this new class to understand everything about creating at Juvian maker space. This class is run on a weekly basis and includes everything you need to create a finished piece. Contact us to find out more and to sign up.</p>
                </div>
          
                <div className='details-image1'>

                </div>
                </div>


                <div className='workshop-info'>
                <div className='details'> 
                        <h3>Carpentry from Scratch</h3>
                        <h3> Unleash Your Imagination</h3>
                        <p>We offer a variety of classes for makers of all ages. Carpentry from Scratch is free for new members and gives a great introduction to understanding how to create at Juvian maker space. Talk to a community manager for more information.</p>
                </div>
          
                <div className='details-image2'>

                </div>
                </div>

                
                <div className='workshop-info'>
                <div className='details'> 
                        <h3>Carpentry from Scratch</h3>
                        <h3> Unleash Your Imagination</h3>
                        <p>We offer a variety of classes for makers of all ages. Carpentry from Scratch is free for new members and gives a great introduction to understanding how to create at Juvian maker space. Talk to a community manager for more information.</p>
                </div>
          
                <div className='details-image3'>

                </div>
                </div>

                
                <div className='workshop-info'>
                <div className='details'> 
                        <h3>Carpentry from Scratch</h3>
                        <h3> Unleash Your Imagination</h3>
                        <p>We offer a variety of classes for makers of all ages. Carpentry from Scratch is free for new members and gives a great introduction to understanding how to create at Juvian maker space. Talk to a community manager for more information.</p>
                </div>
          
                <div className='details-image4'>

                </div>
                </div>

                
                <div className='workshop-info'>
                <div className='details'> 
                        <h3>Carpentry from Scratch</h3>
                        <h3> Unleash Your Imagination</h3>
                        <p>We offer a variety of classes for makers of all ages. Carpentry from Scratch is free for new members and gives a great introduction to understanding how to create at Juvian maker space. Talk to a community manager for more information.</p>
                </div>
          
                <div className='details-image5'>

                </div>
                </div>
             
            </div>

          
        </div>
        
        
        
        
        
        
        </div>
        </>
    )
}

export default Navbar