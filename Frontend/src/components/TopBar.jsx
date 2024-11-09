import React from "react";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import About from "../pages/About"


const TopBar = () => {
    return (
        <div>
            <Blog />
            <About />
            <Gallery />
            <p>Dattebayo!</p>
            <p>IG</p>
            <p>LinkedIn</p>
            <p>X</p>
        </div>

    )
}


export default TopBar;