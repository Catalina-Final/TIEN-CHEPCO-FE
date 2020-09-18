import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../../../redux/actions/product.actions";
import { useHistory, Link } from "react-router-dom";

import ProductAdminView from "../../../components/ProductAdminView"

import { Button } from "react-bootstrap"
import ClipLoader from "react-spinners/ClipLoader";

const ProductListPage = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const products = useSelector((state) => state.auth.products);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();

  useEffect(() => {
    dispatch(productActions.productsRequest());
  }, [dispatch]);
  const handleClickOnProduct = (id) => {
    history.push(`/products/${id}`);
  };

  return (
    <div>
      <h1>list product</h1>
      {isAuthenticated && (
        <Link to="/admin/products/add">
          <Button variant="primary">Write now</Button>
        </Link>
      )}

      {loading ? (
        <ClipLoader color="#f86c6b" size={150} loading={loading} />
      ) : (
          <>

            {products.length ? (
              <>
                <div>
                  {products.map((product) => (
                    <ProductAdminView
                      product={product}
                      key={product._id}
                      handleClick={handleClickOnProduct}
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

export default ProductListPage
