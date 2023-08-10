
import React from "react";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
// import "./style.css"
import sectionData from "./datas/sectionData";


// Project link: https://drive.google.com/file/d/1aOYebjuih6ib6XNAm6ejh5yRwhoFmag4/view?pli=1


const App = () => {
    // let a = 100
    // let b = 70

    return(
        <div>
            <Navbar />
            <AboutMe />
             {
                sectionData.map((value)=>(
                       <Section  title={value.title} des={value.des} />
                ))
             }
             {/* {
               a>b? (<h1> Bigger is {a}</h1>) : (<h1>Bigger is {b}</h1>)
             } */}

        </div>
    )
}

export default App;


// in Jsx 
// if else => ternary operator 
// loops => map, filter, reduce => higher order function
