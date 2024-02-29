import React from "react";
import vg from "../assets/2.png"
import {    AiFillGoogleCircle,
AiFillAmazonCircle,
AiFillYoutube,
AiFillInstagram}
 from "react-icons/ai"

const Home = () =>{
    return(
        <>
       <div className="home" id="home">

    <main>
       <h1>TechGuru</h1> 
       <p>Solution to all your problems</p>
    </main>

       </div>

       <div className="home2">
        <img src= {vg} alt="graphics" />

        <div>
            <p>
                We are your one and only solution to the tech problems you face
                every dey. We are leading tech company whose aim to increase the problem solving abilities in childeren.
            </p>
        </div>
       </div>
        
        <div className="home3" id="about">
            <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique iste, asperiores necessitatibus vel nostrum ratione vitae quam vero optio odit architecto eaque dolores iusto! Placeat deleniti ex, dolores quae tenetur facilis qui veritatis quasi amet distinctio voluptatibus impedit, eius architecto velit laboriosam quo inventore? Non maiores omnis unde voluptatibus repudiandae similique nemo repellendus ducimus at et. Fugiat perspiciatis aut iste voluptatem deserunt facilis? Quasi aperiam architecto nihil distinctio, porro neque perspiciatis voluptatibus officiis. Iure repellat ipsum asperiores reiciendis </p>
            </div>
        </div>

        <div className="home4" id="brands">
            
        <div className="icons">
            <h1>Brands</h1>
            <article>
            <div style={{animationDelay:'0.3s'}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>
                <div style={{animationDelay:'0.5s'}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style={{animationDelay:'0.7s'}}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>

                <div style={{animationDelay:'0.9s'}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
                

               
            </article>
        </div>
        
        </div>
        </>
    )
}

export default Home