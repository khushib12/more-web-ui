import React from "react";
import "./shoe.css";
import nike from "./../images/Nike-Shoe.png";
import shoe_icon from "./../images/shoe-icon.svg";
import Search from "./../images/search.svg";
const Shoe = () =>{

    return(
        <div>
            <div className="shoe-first">
                <div className="shoe-first1">
                <h1><img className="s-icon" src={shoe_icon}></img>  Shoes</h1>
             <form action="/" method="GET" className="form">
                <input type="search" placeholder="Search For Brands & Etc  " className="search-field" />
                <button type="submit" className="search-button">
                <i class="fas fa-search"></i>
                </button>

                </form>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="shoe-first2">
                    <div className="shoe-first21">
                    
                    </div>
                    <img src={nike}></img>


                    
                </div>

               
             
            </div>
        </div>

    );
};


export default Shoe;