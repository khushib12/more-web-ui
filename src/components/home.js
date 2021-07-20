import React from "react";
import bag from "./../images/shopping-bag.svg";
import couple from "./../images/couple.jpg";
import snacks from "./../images/snacks.jpg";
import woman from "./../images/woman.jpg";
import "./home.css";


const Home = () =>{

    return(
        <div>
            <a href="/Shop">Shop</a>
            <div className="second">
                <div className="second1">
                    <img src={woman }></img>
                    <div>SERVICE</div>
                </div>
                <div className="second1">
                    <img src={couple}></img>
                    <div>SHOPPING</div>
                </div>
                <div className="second1">
                    <img src={snacks}></img>
                    <div>SNACKS</div>
                </div>

            </div>

            <div className="third">
                <h1>What's More</h1>
                <div className="third1">
                 <div className="third2" >
                     <h1>More For Buyers</h1> 
                     <p>Explore the vast varieties of services undeer one roof,shop with confidence and eat what you like</p>
                     <button>Explore More <i class="fas fa-arrow-right"></i></button>

                </div>
                <div className="third2">
                    <h1>More For Traders</h1>
                    <p>Do more and sell more with us and keep track of your buisness</p>
                    <br></br>
                    
                     <button className="help">Explore More <i class="fas fa-arrow-right"></i></button>


                </div>

                </div>
                

            </div>
                
           
        </div>

    );
}


export default Home;