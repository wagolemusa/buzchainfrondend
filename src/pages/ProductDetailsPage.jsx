import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../componets/Layout/Footer";
import Header from "../componets/Layout/Headers";
import ProductDetails from "../componets/Products/ProductDetails"
import { productData } from "../static/data";

const ProductDetailsPage = () => {

  const { name } = useParams();
  const [ data, setData ] = useState(null);
  const productName  = name.replace(/-/g," ");
  console.log("my name", name)
  
  useEffect(() => {
      const data = productData.find((i) => i.name === productName);
      setData(data);
  }, [])
    return(
      <div>
        <Header />
        <ProductDetails data={data} />
        <Footer />
      </div>
    )
}

export default ProductDetailsPage;

