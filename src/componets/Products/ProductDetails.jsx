import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/styles";


const ProductDetails =  ({data}) => {
    const { name } = useParams();
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false)
    const [select, setSelect] = useState(0)
    const navigate = useNavigate();

    return(
        <div className="bg-white">
            {
                data ? (
                    <div className={`styles.section} w-[90%] 800px:w-[80]`}>
                        <div className="w-full py-5">
                            <div className="w-full 800px:flex">
                                <div className="w-full 800px:w-[50%]">
                                    <img src={data.image_Url[select].url} alt="" className="w-[80%]" />
                                    <div className="w-full flex">
                                    <div className={`${select === 0 ? "border" : "null"} cursor-pointer`}>
                                        <img src={data?.image_Url[0].url} alt="" 
                                            className="h-[200px]"
                                            onClick={() => setSelect(0)}
                                        />
                                    </div>
                                    <div className={`${select === 1 ? "border" : "null"} cursor-pointer`}>
                                        <img src={data?.image_Url[1].url} alt="" 
                                            className="h-[200px]"
                                            onClick={() => setSelect(1)}
                                        />
                                    </div>
                                </div>
                                </div>
                                <div className="w-full 800px:w-[50%]">
                                    <div className="w-full 800px:w-[50%] pt-3">
                                       <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ): null
            }
         
        </div>
    )
}

export default ProductDetails;