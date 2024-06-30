import React from "react";
import HomeContent from "./HomeContent";
import Subcontent from "./Subcontent";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Home({totalQuantity}) {
    return (<div><HomeContent/><Subcontent /><Footer /></div>);
}

export default Home;