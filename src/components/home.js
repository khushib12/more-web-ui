import React from "react";
import bag from "./../images/shopping-bag.svg";
import couple from "./../images/couple.jpg";
import snacks from "./../images/snacks.jpg";
import woman from "./../images/woman.jpg";
import "./home.css";


const Home = () =>{

    return(
        <div>
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
                
           
        </div>

    );
}


export default Home;