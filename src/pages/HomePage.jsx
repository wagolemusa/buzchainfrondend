import React from "react";
import Header from "../componets/Layout/Headers.jsx"
import Hero from "../componets/Route/Hero/Hero.jsx";
import Categories from "../componets/Route/Categories/Categories"
import BestDeals from "../componets/Route/BestDeals/BestDeals"
import FeatureProduct from "../componets/Route/FeatureProduct/FeatureProduct"
import Events from "../componets/Events/Events.jsx"

const HomePage = () => {
    return(
        <div>
            <Header activeHeading={1}/>
            <Hero/>
            <Categories />
            <BestDeals />
            <Events />
            <FeatureProduct />
            
        </div>
    )
}


export default HomePage;


