import React from "react"
import "./style.css"
import Mumbai from "./images/mumbai.webp"
import Delhi from "./images/delhi.jpg"
import Goa from "./images/goa.jpg"
import Chennai from "./images/chennai.jpg"
import Jaipur from "./images/jaipur.jpg"
import Agra from "./images/tajmahal-1.jpg"
import Darjeeling from "./images/darjeeling.jpg"
import TamilNadu from "./images/tamil nadu.jpg"
import Lonawala from "./images/lonawala.jpg"
import Dehradun from "./images/DEHRADUN.jpg"
import Manali from "./images/manali.jpg"
import AnadamanAndNicobarIsland from "./images/Anadman and Nicobar.jpg"



const Location = ()=>{
    return (
        <div id="locations">
            <h1 style={{"marginTop":"100px", "fontSize":"80px","textAlign":"center", "fontFamily":"serif"}}>Locations</h1>

<section style={{"display": "flex", "flex-direction": "row"}}>
    <article>
        <a href="/"><img class="img" src={Mumbai} alt=""></img></a>
        <div class="details">
            <span id="location">Mumbai, India</span>
            <span id="distance">410 kilometers away</span>
            <span id="month">June</span>
            <span id="price">&#8377; 8,545 <span style={{"color": "grey"}}>night</span></span>
            <span id="rating">&#9733; 4.91</span>
            <span id="heart">&#9825;</span>
        </div>
    </article>
    <article>
        <a href="/"><img class="img" src={Delhi} alt=""></img></a>
        <div class="details">
            <span id="location">Delhi, India</span>
            <span id="distance">520 kilometers away</span>
            <span id="month">May</span>
            <span id="price">&#8377; 5,979 <span style={{"color": "grey"}}>night</span></span>
            <span id="rating">&#9733; 4.82</span>
            <span id="heart">&#9825;</span>
        </div>
    </article>
    <article>
        <a href="/"><img class="img" src={Goa} alt=""></img></a>
    <div class="details">
        <span id="location">Goa, India</span>
        <span id="distance">320 kilometers away</span>
        <span id="month">April</span>
        <span id="price">&#8377; 6,834 <span style={{"color": "grey"}}>night</span></span>
        <span id="rating">&#9733; 4.65</span>
        <span id="heart">&#9825;</span>
    </div>
    </article>
    <article>
        <a href="/"><img class="img" src={Chennai} alt=""></img></a>
    <div class="details">
        <span id="location">Chennai, India</span>
        <span id="distance">415 kilometers away</span>
        <span id="month">August</span>
        <span id="price">&#8377; 5,769 <span style={{"color": "grey"}}>night</span></span>
        <span id="rating">&#9733; 4.88</span>
        <span id="heart">&#9825;</span>
    </div>
    </article>
</section>

<section style={{"display": "flex", "flex-direction": "row", "margin-top": "100px"}}>
    <article>
        <a href="/"><img class="img" src={Jaipur} alt=""></img></a>
    <div class="details">
        <span id="location">Jaipur, India</span>
        <span id="distance">325 kilometers away</span>
        <span id="month">Feburary</span>
        <span id="price">&#8377; 6,979 <span style={{"color": "grey"}}>night</span></span>
        <span id="rating">&#9733; 4.92</span>
        <span id="heart">&#9825;</span>
    </div>
    </article>
    <article>
        <a href="/"><img class="img" src={Agra} alt=""></img></a>
    <div class="details">
        <span id="location">Agra, India</span>
        <span id="distance">325 kilometers away</span>
        <span id="month">March</span>
        <span id="price">&#8377; 4,581 <span style={{"color": "grey"}}>night</span></span>
        <span id="rating">&#9733; 4.78</span>
        <span id="heart">&#9825;</span>
    </div>
    </article>
    <article>
        <a href="/"><img class="img" src={Darjeeling} alt=""></img></a>
    <div class="details">
        <span id="location">Darjeeling, India</span>
        <span id="distance">364 kilometers away</span>
        <span id="month">November</span>
        <span id="price">&#8377; 4,214 <span style={{"color": "grey"}}>night</span></span>
        <span id="rating">&#9733; 4.94</span>
        <span id="heart">&#9825;</span>
    </div>
    </article>
    <article>
        <a href="/"><img class="img" src={TamilNadu} alt=""></img></a>
    <div class="details">
        <span id="location">Tamil Nadu, India</span>
        <span id="distance">624 kilometers away</span>
        <span id="month">October</span>
        <span id="price">&#8377; 4,479 <span style={{"color": "grey"}}>night</span></span>
        <span id="rating">&#9733; 4.90</span>
        <span id="heart">&#9825;</span>
    </div>
    </article>
</section>

<section style={{"display": "flex", "flex-direction": "row", "margin-top": "100px"}}>
    <article>
        <a href="/"><img class="img" src={Lonawala} alt=""></img></a>
    <div class="details">
        <span id="location">Lonawala, India</span>
        <span id="distance">225 kilometers away</span>
        <span id="month">August</span>
        <span id="price">&#8377; 5,979 <span style={{"color": "grey"}}>night</span></span>
        <span id="rating">&#9733; 4.89</span>
        <span id="heart">&#9825;</span>
    </div>
    </article>
    <article>
        <a href="/"><img class="img" src={Dehradun} alt=""></img></a>
    <div class="details">
        <span id="location">Dehradun, India</span>
        <span id="distance">425 kilometers away</span>
        <span id="month">September</span>
        <span id="price">&#8377; 5,979 <span style={{"color": "grey"}}>night</span></span>
        <span id="rating">&#9733; 4.92</span>
        <span id="heart">&#9825;</span>
    </div>
    </article>
    <article>
        <a href="/"><img class="img" src={Manali} alt=""></img></a>
    <div class="details">
        <span id="location">Manali, India</span>
        <span id="distance">285 kilometers away</span>
        <span id="month">January</span>
        <span id="price">&#8377; 6,158 <span style={{"color": "grey"}}>night</span></span>
        <span id="rating">&#9733; 4.96</span>
        <span id="heart">&#9825;</span>
    </div>
    </article>
    <article>
        <a href="/"><img class="img" src={AnadamanAndNicobarIsland} alt=""></img></a>
    <div class="details">
        <span id="location">Andaman and Nicobar Island, India</span>
        <span id="distance">245 kilometers away</span>
        <span id="month">July</span>
        <span id="price">&#8377; 5,979 <span style={{"color": "grey"}}>night</span></span>
        <span id="rating">&#9733; 4.85</span>
        <span id="heart">&#9825;</span>
    </div>
    </article>
</section>
        </div>
    )
}

export default Location;