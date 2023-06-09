import React, { useState } from "react";
import styles from '../../styles/styles'
import { Link } from "react-router-dom";
import { categoriesData, productData } from '../../static/data'
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg"
import DropDown from "./DropDown"
import Navbar from "./Navbar"
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from '../cart/Cart';
import Wishlist from "../Wishlist/Wishlist"


const Header = ({ activeHeading }) => {
    const { isAuthenticated, user, loading } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchData, setSearchData] = useState(null);
    const [active, setActive] = useState(false)
    const [dropDown, setDropdown] = useState(false)
    const [opeCart, setOpenCart] = useState(false)
    const [openWishlist, setOpenWishlist] = useState(false)


    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term)

        const filterProducts = productData && productData.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
        )
        setSearchData(filterProducts);
    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) {
            setActive(true);
        } else {
            setActive(false)
        }
    })

    return (
        <>
            <div className={`${styles.section}`}>
                {/* Top bar */}
                <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
                    <Link className="w-20 h-50" to="/">
                        <img src="https://previews.123rf.com/images/tranigen/tranigen2101/tranigen210100020/162196985-bag-shop-online-design-vector-icon-shopping-design-vector.jpg" alt="logo" />
                    </Link>

                    {/* Searh box */}
                    <div className="w-[50%] relative">
                        <input type="text" placeholder="Search Product..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                        />
                        <AiOutlineSearch size={30} className="absolute right-2 top-1.5 cursor-pointer" />
                        {
                            searchData && searchData.length !== 0 ? (
                                <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
                                    {
                                        searchData && searchData.map((i, index) => {
                                            const d = i.name;
                                            const product_name = d.replace(/\&+/g, "_");
                                            return (
                                                <Link to={`/priduct/${product_name}`}>
                                                    <div className="w-full flex items-start-py-3">
                                                        <img src={i.image_Url[0].url} alt=""
                                                            className="w-[40px] h-[40px] mr-[10px]"
                                                        />
                                                        <h1>{i.name}</h1>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            ) : null
                        }
                    </div>
                    <div className={`${styles.button}`}>
                        <Link to="/seller">
                            <h1 className="text-[#fff] flex items-center">
                                Become  Seller <IoIosArrowForward className="ml-1" />
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
            {/* End-of-Top-Bar */}

            {/* Start of Navbar */}
            <div className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null} transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}>
                <div className={`${styles.section} relative ${styles.norramlFlat} justify-between`}>

                    {/* catagories */}
                    <div onClick={() => setDropdown(!dropDown)}>
                    <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
                        <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
                        <button
                            className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
                        >
                            All Categories
                        </button>
                        <IoIosArrowDown
                            size={20}
                            className="absolute right-2 top-4 cursor-pointer"
                            onClick={() => setDropdown(!dropDown)}
                        />
                        {
                            dropDown ? (
                                <DropDown
                                    categoriesData={categoriesData}
                                    setDropdown={setDropdown}
                                />
                            ) : null
                        }
                    </div>
                    </div>
                </div>
                {/* Navitems */}
                <div className={`${styles.noramlFlex}`}>
                    <Navbar active={activeHeading} />
                </div>

                {/* wishList popup */}
                <div className="flex">
                    <div className={`${styles.noramlFlex}`}>
                    <div className="relative cursor-pointer mr-[15px]"
                        onClick={() =>setOpenWishlist(true)}
                    >
                        <AiOutlineHeart size={30} color="rgb(255 255 255 /83%)" />
                        <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                            0
                        </span>
                    </div>
                    </div>
                    {/* Shoping Cart */}
                    <div className="relative cursor-pointer mr-[15px]">
                        <AiOutlineShoppingCart size={30} color="rgb(255 255 255 /83%)" 
                            onClick={() => setOpenCart(true)}
                        />
                        <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                            0
                        </span>
                    </div>

                    <div className="relative cursor-pointer mr-[15px]">
                       {
                        isAuthenticated ? (
                            <Link to="/profile">
                                <img src={`${backend_url}${user.avatar}`}  className="w-[80px] h-[40px] rounded-full" alt="" />
                            </Link>
                        ) :(
                            <Link to="/login">
                                <CgProfile size={30} color="rgb(255 255 255 /83%)" />
                            </Link>
                        )
                       }
                    </div>

                    {/* cart popup */}

                    {
                        opeCart ? (
                            <Cart setOpenCart={setOpenCart} />
                        ) :(
                            null
                        )
                    }

                    {/* wishlist popup */}
                    {
                        openWishlist ? (
                            <Wishlist setOpenWishlist={setOpenWishlist} />
                        ) :(
                            null
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Header;



