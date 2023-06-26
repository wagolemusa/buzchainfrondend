import React, { useEffect, useState} from "react";
import Header from "../componets/Layout/Headers";
import styles from "../styles/styles";
import { useSearchParams } from "react-router-dom";
import { productData } from "../static/data";
import ProductCard from "../componets/Route/ProductCard/ProductCard";

const BestSellingPage = () => {

    const [data, setData] =  useState([]);

    useEffect(() => {
        
            const d = productData && productData.sort((a,b) => b.total_sell - a.total_sell);
            setData(d)
        
    }, [])

    return (
        <div>
            <Header activeHeading={2}/>
            <br />
            <br/>
            <div className={`${styles.section}`}>
                <div className="grid grid-cols-1 gap-[20px] md:grid-cols md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                    {
                        data && data.map((i, index) => <ProductCard data={i} key={index} />)
                    }
                </div>
               
            </div>
        </div>
    )
}


export default BestSellingPage;




