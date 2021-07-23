import React from "react";
import  abaya from "./../images/abaya.svg";
import  baby from "./../images/baby-clothes.svg";
import  perfume from "./../images/perfume.svg";
import  cosmetics from "./../images/cosmetics.svg";
import  fashion from "./../images/fashion.svg";
import  flyers from "./../images/flyers.svg";
import  handbag from "./../images/handbag.svg";
import  home from "./../images/home.svg";
import  luggage from "./../images/luggage.svg";
import  shoes from "./../images/shoes.svg";
import   nightgown from "./../images/nightgown.svg";
import   necklace from "./../images/necklace.svg";
import   tshirt from "./../images/tshirt.svg";
import "./shopping.css";


const Shop = () =>{

    return(
        <div>
            <div className="s-second">
                <h1>Sub Categories</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <br></br>
                <br></br>
                <div className = "s-second1">
                    <div className="s-second12 p">
                        <img src={abaya}></img>
                        <a>Abaya <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div  className="s-second12 b">
                    <img  src={fashion}/>  
                    <a>Dresses <i class="fas fa-arrow-right"></i></a>
                    
                    </div>
                    <div  className="s-second12 p">
                    <img src={nightgown} ></img>
                    <a>PJ <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div  className="s-second12 b">
                    <img src={luggage}></img>
                    <a>Travel <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div  className="s-second12 p">
                    <img src={necklace}></img>
                    <a>Jewellery <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className = "s-second1">
                    <div  className="s-second12 b">
                    <img src={handbag}></img>
                    <a>Shyal&nbsp;W'shalat&nbsp;<i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div  className="s-second12 p">
                    <img src={home}></img>
                    <a>Home <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div  className="s-second12 b">
                    <img src={shoes}></img>
                    <a href="/Shoe">Shoes <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div  className="s-second12 p"> 
                    <img src={cosmetics}></img>
                    <a>Makeup <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div  className="s-second12 b">
                    <img src={tshirt}></img>
                    <a>Daily Wear <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className = "s-second1">
                    <div className="s-second12">
                   
                    </div>
                    <div className="s-second12 b">
                    <img src={perfume}></img>
                    <a>Perfumes <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="s-second12 p">
                    <img src={flyers}></img>
                    <a>Brand&nbsp;Shopper&nbsp;<i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="s-second12 b">
                    <img src={baby}></img>
                    <a>Baby Clothes <i class="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="s-second12 " >
                   
                    </div>
                </div>

            </div>

            <div className="s-fourth">
                 <h1>Search For New Product</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div className="container">

                <form action="/" method="GET" className="form">
                <input type="search" placeholder="Search" className="search-field" />
                <button type="submit" className="search-button">
                {/* <img src="search.png"> */}
                </button>

                </form>

                </div>
                


            </div>
        </div>

    );
}

export default Shop;