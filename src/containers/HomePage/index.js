import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../redux/actions/product.actions";
import { useHistory, Link } from "react-router-dom";

import Product from "../../components/Product"

import { Button } from "react-bootstrap"
import ClipLoader from "react-spinners/ClipLoader";

const HomePage = () => {


  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();

  useEffect(() => {
    dispatch(productActions.productsRequest());
  }, [dispatch]);

  const handleClickOnProduct = (id) => {
    history.push(`/products/${id}`);
  };
  const handleBuyNow = (productId) => {
    dispatch(productActions.addProductToCart(productId))
  }


  // const uploadWidget = () => {
  //   window.cloudinary.openUploadWidget(
  //     {
  //       cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  //       upload_preset: process.env.REACT_APP_CLOUDINARY_PRESET,
  //       tags: ["socialBlog", "blogImages"],
  //     },
  //     function (error, result) {
  //       if (result && result.length) {
  //         setFormData({
  //           ...formData,
  //           images: result.map((res) => res.secure_url),
  //         });
  //       }
  //     }
  //   );
  // };

  return (
    <div>
      <h1>chep co</h1>



      {loading ? (
        <ClipLoader color="#f86c6b" size={150} loading={loading} />
      ) : (
          <>

            {products.length ? (
              <>
                <div>
                  {products.map((product) => (
                    <Product
                      product={product}
                      key={product._id}
                      handleClick={handleClickOnProduct}
                      handleBuyNow={handleBuyNow}
                    />
                  ))}
                </div>
              </>
            ) : (
                <p>There are no products</p>
              )}
          </>
        )}
    </div>
  )
}

export default HomePage
