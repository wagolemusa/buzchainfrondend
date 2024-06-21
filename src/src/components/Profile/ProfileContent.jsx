import React, { useState } from "react";
import { backend_url } from "../../../server";
import { useSelector } from "react-redux";
import { AiOutlineArrowRight, AiOutlineCamera } from "react-icons/ai";
import styles from "../../../styles/styles";
// import { DataGird } from "@material-ui/data-grid"
import { DataGrid } from '@mui/x-data-grid';
import {
    MdOutlineAdminPanelSettings,
    MdOutlinePassword,
    MdOutlineTrackChanges,
  } from "react-icons/md";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ProfileContent = ({active}) =>{

    const { user } = useSelector((state) => state.user);
    const [name, setName] = useState(user && user.name)
    const [email, setEmail] = useState(user && user.email)
    const [phoneNumber, setPhoneNumber] = useState()
    const [zipCode, setZipCode] = useState()
    const [address1, setAddress1] = useState("")
    const [address2, SetAddress2] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return(
        <div className="w-full">

            {/* Profile page */}
            {
                active === 1 && (
                    <>
                    <div className="flex justify-center w-full">
                        <div className="relative">
                            <img src={`${backend_url}${user?.avatar}`}
                                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border[#3ad132]"
                            alt=""/>
                            <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                                <AiOutlineCamera />
                            </div>
                        </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="w-full px-5">
                            <form onSubmit={handleSubmit} aria-required={true}>
                                <div className="w-full flex pb-3">
                                    <div className="w-[50%]">
                                        <label className="block pb-2">
                                            Full Name
                                        </label>
                                        <input type="text" className={`${styles.input} !w-[95%]`} required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-[50%]">
                                        <label className="block pb-2">
                                            Email
                                        </label>
                                        <input type="text" className={`${styles.input} !w-[95%]`} required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="w-full flex pb-3">
                                    <div className="w-[50%]">
                                        <label className="block pb-2">
                                            Phone Number
                                        </label>
                                        <input type="number" className={`${styles.input} !w-[95%]`} required
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-[50%]">
                                        <label className="block pb-2">
                                            Zip Code
                                        </label>
                                        <input type="number" className={`${styles.input} !w-[95%]`} required
                                            value={zipCode}
                                            onChange={(e) => setZipCode(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex pb-3">
                                    <div className="w-[50%]">
                                        <label className="block pb-2">
                                            Address 1
                                        </label>
                                        <input type="number" className={`${styles.input} !w-[95%]`} required
                                            value={address1}
                                            onChange={(e) => setAddress1(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-[50%]">
                                        <label className="block pb-2">
                                            Address 2
                                        </label>
                                        <input type="number" className={`${styles.input} !w-[95%]`} required
                                            value={address2}
                                            onChange={(e) => SetAddress2(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <input
                                    className={`w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                                    required
                                    value="Update"
                                    type="Submit"
                                />
                            </form>
                        </div>
                    </>
                )
            }

            {/* Order Page */}
            {
                active === 2 && (
                    <>
                        <AllOrders />
                    </>
                )
            }
            

            {/* RefundOrders */}
            {
                active === 3 && (
                    <>
                        <AllRefundOrders />
                    </>
                )
            }

            {/* Tracker Orders */}

            {
                active === 5 && (
                    <>
                        <TrackOrder />
                    </>
                )
            }

            {/* Paymant Mothods */}
            {
                active === 6 && (
                    <div>
                        <PaymantMethod />
                    </div>
                )
            }

            {/* user Address pop */}

            {
                active === 7 && (
                    <div>
                        <Address />
                    </div>
                )
            }

        </div>
    )
}


// Orders
const AllOrders = () => {

    const orders = [
        {
            _id: "745688h6743bncbcx6211562",
            orderItems: [
                {
                    name: "Iphone 14 pro max"
                },
            ],
            totalPrice: 120,
            orderStatus: "Proccessing"
        },
    ];


    const columns = [
        { fields: "id", headerName: "Order ID", minWidth: 150, flex: 0.7},

        // {
        //     fields: "status",
        //     headerName: "Status",
        //     minWidth: 130,
        //     flex: 0.7,
        //     cellClassName: (params) => {
        //         return params.getValue(params.id, "status") === "Delivered"
        //             ? "greenColor"
        //             : "redColor"
        //     },
        // },

        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },
        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={`/order/${params.id}`}>
                            <Button>
                                <AiOutlineArrowRight size={20} />
                            </Button>
                        </Link>
                    </>
                )
            }
        }
    ]

    const row = []

    orders && orders.forEach((item) => {
        row.push({
            id: item._id,
            itemsQty: item.orderItems.length,
            total: "US$ " + item.totalPrice,
            status: item.orderStatus,
        })
    })

    return(
        <div className="pl-8 pt-1">
            <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            />
        </div>
    )
}

// refundOrders
const AllRefundOrders = () => {
    const orders = [
        {
            _id: "745688h6743bncbcx6211562",
            orderItems: [
                {
                    name: "Iphone 14 pro max"
                },
            ],
            totalPrice: 120,
            orderStatus: "Proccessing"
        },
    ];

    const columns = [
        { fields: "id", headerName: "Order ID", minWidth: 150, flex: 0.7},

        // {
        //     fields: "status",
        //     headerName: "Status",
        //     minWidth: 130,
        //     flex: 0.7,
        //     cellClassName: (params) => {
        //         return params.getValue(params.id, "status") === "Delivered"
        //             ? "greenColor"
        //             : "redColor"
        //     },
        // },

        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },
        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={`/order/${params.id}`}>
                            <Button>
                                <AiOutlineArrowRight size={20} />
                            </Button>
                        </Link>
                    </>
                )
            }
        }
    ]
    const row = []

    orders && orders.forEach((item) => {
        row.push({
            id: item._id,
            itemsQty: item.orderItems.length,
            total: "US$ " + item.totalPrice,
            status: item.orderStatus,
        })
    })

    return(
       <div className="pl-8 pt-1">
            <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            />
        </div>
    )
}

// TrackOrder
const TrackOrder = () => {

    const orders = [
        {
            _id: "745688h6743bncbcx6211562",
            orderItems: [
                {
                    name: "Iphone 14 pro max"
                },
            ],
            totalPrice: 120,
            orderStatus: "Proccessing"
        },
    ];
    const columns = [
        { fields: "id", headerName: "Order ID", minWidth: 150, flex: 0.7},

        // {
        //     fields: "status",
        //     headerName: "Status",
        //     minWidth: 130,
        //     flex: 0.7,
        //     cellClassName: (params) => {
        //         return params.getValue(params.id, "status") === "Delivered"
        //             ? "greenColor"
        //             : "redColor"
        //     },
        // },

        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },
        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },
        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={`/order/${params.id}`}>
                            <Button>
                                <MdOutlineTrackChanges size={20} />
                            </Button>
                        </Link>
                    </>
                )
            }
        }
    ]


    const row = []

    orders && orders.forEach((item) => {
        row.push({
            id: item._id,
            itemsQty: item.orderItems.length,
            total: "US$ " + item.totalPrice,
            status: item.orderStatus,
        })
    })

    return(
        <div className="pl-8 pt-1">
            <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
            />
        </div>
    )
}

// Payment Method
const PaymantMethod = () =>{

    return(
        <>
            <div className="w-full px-5">
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-[25px] font-[600] text-[#000000] pt-2" >Payment Methods</h1>
                    <div className={`${styles.button} !rounded-md`}>
                        <span className="text-[#fff]">Add New</span>
                    </div>
                </div>
                <br/>
                <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
                    <div className="flex items-center">
                        <img src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg" alt=""/>
                        <h5 className="pl-5 font-[600]">Wagole Musa</h5>
                    </div>
                    <div className="pl-8 flex items-center">
                        <h6>1234 *** *** ****</h6>
                        <h5 className="pl-6">08/2023</h5>
                    </div>
                    <div className="min-w-[10%] flex items-center justify-between pl-8">
                         <MdOutlineAdminPanelSettings size={25} className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    )
}


const Address = () => {
    return(

        <>
            <div className="w-full px-5">
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-[25px] font-[600] text-[#000000] pt-2" >My Address</h1>
                    <div className={`${styles.button} !rounded-md`}>
                    </div>
                </div>
                <br/>
                <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between pr-10">
                    <div className="flex items-center">
                        <h5 className="pl-5 font-[600]">Default</h5>
                    </div>
                    <div className="pl-8 flex items-center">
                        <h5 className="pl-6">456 Kampala New Steet</h5>
                    </div>
                    <div className="pl-8 flex items-center">
                        <h5 className="pl-6">0754 18 89 38</h5>
                    </div>
                    <div className="min-w-[10%] flex items-center justify-between pl-8">
                         <MdOutlineAdminPanelSettings size={25} className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileContent;



