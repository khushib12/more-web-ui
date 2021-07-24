import React from "react";
import "./shoe.css";
import nike from "./../images/Nike-Shoe.png";
import shoe_icon from "./../images/shoe-icon.svg";
import Search from "./../images/search.svg";
import shoe2 from "./../images/shoe2.png";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box"

const Shoe = () =>{
    //insert rating from backend here
    const [value, setValue] = React.useState(2);
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

            <div  className="shoe-second">
                <div className="shoe-second1">
                    <div className="shoe-second11">
                        <h1>Choose Type</h1>
                        <div></div>

                    </div>


                </div>
                <div  className="shoe-second2">
                   <div>

                   <div className="shoe-second21">
                        <div className="shoe-second211">
                            <div className="shoe-second2111">
                                <img src={shoe2}></img>
                            </div>
                            <h2>Party Dress</h2>
                            {/* <Box component="fieldset" mb={3} borderColor="transparent"> */}
                            {/* <Typography component="legend"></Typography> */}
                            <Rating name="read-only" value={value} readOnly />
                        {/* </Box> */}
                            <h4 className="r">Price</h4>
                            <p><h4 >Seller : Silicon Inc.   <span className="cross">  AED799 </span><span className="big">AED599</span></h4></p>
                        </div>

                    </div>

                   </div>
                    
                  <div>

                  <div className="shoe-second21">
                        <div className="shoe-second211">
                            <div className="shoe-second2111">
                                <img src={shoe2}></img>
                            </div>
                            <h2>Party Dress</h2>
                            <Rating name="read-only" value={value} readOnly />
                            <h4 className="r">Price</h4>
                            <p><h4 >Seller : Silicon Inc.   <span className="cross">  AED799 </span><span className="big">AED599</span></h4></p>
                        </div>

                    </div>

                  </div>
                  <div>

                   <div className="shoe-second21">
                        <div className="shoe-second211">
                            <div className="shoe-second2111">
                                <img src={shoe2}></img>
                            </div>
                            <h2>Party Dress</h2>
                            <Rating name="read-only" value={value} readOnly />
                            <h4 className="r">Price</h4>
                            <p><h4>Seller : Silicon Inc.   <span className="cross">  AED799 </span><span className="big">AED599</span></h4></p>
                        </div>

                    </div>

                   </div>
                    
                  <div>

                  <div className="shoe-second21">
                        <div className="shoe-second211">
                            <div className="shoe-second2111">
                                <img src={shoe2}></img>
                            </div>
                            <h2>Party Dress</h2>
                            <Rating name="read-only" value={value} readOnly />
                            <h4 className="r">Price</h4>
                            <p><h4>Seller : Silicon Inc.   <span className="cross">  AED799 </span><span className="big">AED599</span></h4></p>
                        </div>

                    </div>

                  </div>
                  <div>

<div className="shoe-second21">
     <div className="shoe-second211">
         <div className="shoe-second2111">
             <img src={shoe2}></img>
         </div>
         <h2>Party Dress</h2>
         <h4 className="r">Price</h4>
         <Rating name="read-only" value={value} readOnly />
         <p><h4>Seller : Silicon Inc.   <span className="cross">  AED799 </span><span className="big">AED599</span></h4></p>
     </div>

 </div>

</div>
 
<div>

<div className="shoe-second21">
     <div className="shoe-second211">
         <div className="shoe-second2111">
             <img src={shoe2}></img>
         </div>
         <h2>Party Dress</h2>
         <h4 className="r">Price</h4>
         <Rating name="read-only" value={value} readOnly />
         <p><h4>Seller : Silicon Inc.   <span className="cross">  AED799 </span><span className="big">AED599</span></h4></p>
     </div>

 </div>

</div>
<div>

                   <div className="shoe-second21">
                        <div className="shoe-second211">
                            <div className="shoe-second2111">
                                <img src={shoe2}></img>
                            </div>
                            <h2>Party Dress</h2>
                            <h4 className="r">Price</h4>
                            <Rating name="read-only" value={value} readOnly />
                            <p><h4>Seller : Silicon Inc.   <span className="cross">  AED799 </span><span className="big">AED599</span></h4></p>
                        </div>

                    </div>

                   </div>
                    
                  <div>

                  <div className="shoe-second21">
                        <div className="shoe-second211">
                            <div className="shoe-second2111">
                                <img src={shoe2}></img>
                            </div>
                            <h2>Party Dress</h2>
                            <Rating name="read-only" value={value} readOnly />
                            <h4 className="r">Price</h4>
                            <p><h4>Seller : Silicon Inc.   <span className="cross">  AED799 </span><span className="big">AED599</span></h4></p>
                        </div>

                    </div>

                  </div>


                    

                </div>
                
            </div>
        </div>

    );
};


export default Shoe;