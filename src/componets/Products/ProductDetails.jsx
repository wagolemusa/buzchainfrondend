import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "../../styles/styles";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";


const ProductDetails = ({ data }) => {
    const { name } = useParams();
    
    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false)
    const [select, setSelect] = useState(0)
    const navigate = useNavigate();

    const increamentCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handleMessageSubmit = () => {

    }

    return (
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
                                    <div className="w-full 800px:w-[110%] pt-3">
                                        <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                                        <br />
                                        <p>{data.description}</p>

                                        <div className="flex pt-3">
                                            <div className={`${styles.productDiscountPrice}`}>
                                                {data.discount_price}$
                                            </div>

                                            <h3 className={`${styles.price}`}>
                                                {data.price ? data.price + "$" : null}
                                            </h3>
                                        </div>

                                        <div className="flex items-center mt-12 justify-between pr-2">
                                            <div>
                                                <button
                                                    className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                                                    onClick={decrementCount}
                                                >
                                                    -
                                                </button>
                                                <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                                                    {count}
                                                </span>
                                                <button
                                                    className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                                                    onClick={increamentCount}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        {/* Button  */}
                                        <div>
                                            {click ? (
                                                <AiFillHeart
                                                    size={30}
                                                    className="cursor-pointer absolute right-2"
                                                    onClick={() => setClick(!click)}
                                                    color={click ? "red" : "#333"}
                                                    title="Remove from  wishlist"
                                                />
                                            ) : (
                                                <AiOutlineHeart
                                                    size={30}
                                                    className="cursor-pointer absolute right-2"
                                                    onClick={() => setClick(!click)}
                                                    color={click ? "red" : "#333"}
                                                    title="Add to wishlist"
                                                />
                                            )}
                                        </div>
                                    </div>

                                    <div className={`${styles.button} mt-6 rounded h-11 flex items-center`}>
                                        <span className="text-white flex items-center">
                                            Add to cart <AiOutlineShoppingCart className="ml-1" />
                                        </span>
                                    </div>

                                    <div className="flex items-center pt-8">
                                        <img src={data.shop.shop_avatar.url} alt=""
                                            className="w-[50px] h-[50px] rounded-full mr-2"
                                        />
                                        <div className="pr-8">
                                            <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                                                {data.shop.nane}
                                            </h3>
                                            <h5 className="pb-3 text-[15px]">
                                                ({data.shop.ratings}) Ratings

                                            </h5>
                                        </div>
                                        <div className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                                            onClick={handleMessageSubmit}
                                        >
                                            <span className="text-white flex items-center ">
                                                send Message<AiOutlineMessage className="ml-1" />
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            </div><br/><br/>
                            <ProductDetailsInfo data={data} />
                        </div>
                    </div>
                ) : null
            }

        </div>
    )
}

const ProductDetailsInfo = ({data}) =>{
    const [active, setActive] = useState(1);
    return(
        <div className="bg-[#f5f6fb] px-3 800px:px-10 py-5 rounded">

            <div className="w-full flex justify-between border-b pt-10 pb-2">

                <div className="relative">
                    <h5 className={"text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"}
                     onClick={() => setActive(1)}>
                        Product Details
                     </h5>
                     { 
                        active === 1 ?(
                            <div className={`${styles.active_indicator}`}></div>
                        ) : null
                     }
                </div>
                <div className="relative">
                    <h5 className={"text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"}
                     onClick={() => setActive(2)}>
                        Product Reviews
                     </h5>
                     { 
                        active === 2 ?(
                            <div className={`${styles.active_indicator}`}></div>
                        ) : null
                     }
                </div>
                <div className="relative">
                    <h5 className={"text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"}
                     onClick={() => setActive(3)}>
                        Seller Infomatation
                     </h5>
                     { 
                        active === 3 ?(
                            <div className={`${styles.active_indicator}`}></div>
                        ) : null
                     }
                </div>
            </div>

            <div>
                { active === 1 ? (
                    <>
                        <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                        The site could be temporarily unavailable or too busy. Try again in a few moments.
                        If you are unable to load any pages, check your computer’s network connection.
                        If your computer or network is protected by a firewall or proxy, make sure that Firefox is permitted to access the web.
                        </p>

                        <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                        The site could be temporarily unavailable or too busy. Try again in a few moments.
                        If you are unable to load any pages, check your computer’s network connection.
                        If your computer or network is protected by a firewall or proxy, make sure that Firefox is permitted to access the web.
                        </p>

                        <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                        The site could be temporarily unavailable or too busy. Try again in a few moments.
                        If you are unable to load any pages, check your computer’s network connection.
                        If your computer or network is protected by a firewall or proxy, make sure that Firefox is permitted to access the web.
                        </p>
                    </>
                ): null}

                {
                    active === 2 ? (
                        <>
                        <p className="w-full justify-center min-h-[40vh] flex items-center">
                            No Yet Posted
                        </p>
                        </>
                    ): null
                }

                {
                    active === 3 ? (
                        <>
                        <p className="w-full block 800px:flex p-5">
                            <div className="w-full 800px:w-[50%]">
                                <div className="flex items-center">
                                    <img src={data.shop.shop_avatar.url} className="w-[50px] rounded-full" alt="" />

                                    <div className="pl-3">
                                        <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                                        <h5 className="pb-2 text-[15px]">
                                            ({data.shop.ratings}) Ratings
                                        </h5>
                                    </div>
                                    
                                    
                                </div>
                                <p className="pt-2">
                                    The site could be temporarily unavailable or too busy. Try again in a few moments. If you are unable to load any pages, 
                                    check your computer’s network connection.
                                     If your computer or network is protected by a firewall or proxy, make sure that Firefox is permitted to access the web
                                    </p>
                            </div>
                            <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
                                <div className="text-left">
                                    <h5 className="font-[600]">
                                        Joined on: <span className="font-[500]">15 March, 2023</span>
                                    </h5>
                                    <h5 className="font-[600] pt-3">
                                        Total Products: <span className="font-[500]">1,223</span>
                                    </h5>
                                    <h5 className="font-[600] pt-3">
                                        Totol Reviews: <span className="font-[500]">324</span>
                                    </h5>
                                    <Link to="/">
                                        <div className={`${styles.button} rounded-[4px] h-[39.5px] mt-3`}>
                                            <h4 className="text-white">Vist Shops</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </p>
                        </>
                    ): null
                }
            </div>
        </div>
    )
}
export default ProductDetails;