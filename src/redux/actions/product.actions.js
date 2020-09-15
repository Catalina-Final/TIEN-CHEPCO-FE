import * as types from "../constants/blog.constants";
import api from "../api";
import { alertActions } from "./alert.actions";

const productsRequest = (
    pageNum = 1,
    limit = 10,
    query = null,
    ownerId = null,
    sortBy = null
) => async (dispatch) => {
    dispatch({ type: types.PRODUCT_REQUEST, payload: null });
    try {
        // let queryString = "";
        // if (query) {
        //   queryString = `&title[$regex]=${query}&title[$options]=i`;
        // }
        // if (ownerId) {
        //   queryString = `${queryString}&author=${ownerId}`;
        // }
        // let sortByString = "";
        // if (sortBy?.key) {
        //   sortByString = `&sortBy[${sortBy.key}]=${sortBy.ascending}`;
        // }
        const res = await api.get(
            `/products`
        );
        dispatch({
            type: types.PRODUCT_REQUEST_SUCCESS,
            payload: res.data.data,
        });
    } catch (error) {
        dispatch({ type: types.PRODUCT_REQUEST_FAILURE, payload: error });
    }
};

const getSingleProduct = (productId) => async (dispatch) => {
    dispatch({ type: types.GET_SINGLE_PRODUCT_REQUEST, payload: null });
    try {
        const res = await api.get(`/products/${productId}`);
        dispatch({
            type: types.GET_SINGLE_PRODUCT_REQUEST_SUCCESS,
            payload: res.data.data,
        });
    } catch (error) {
        dispatch({ type: types.GET_SINGLE_PRODUCT_REQUEST_FAILURE, payload: error });
    }
};



const createNewProduct = (
    name,
    description,
    category,
    inStock,
    price,
    availability,
    ratingsAverage)
    => async (dispatch) => {
        dispatch({ type: types.CREATE_PRODUCT_REQUEST, payload: null });
        try {
            // formData.append("title", title);
            // formData.append("content", content); 
            // if (images && images.length) {
            //     for (let index = 0; index < images.length; index++) {
            //         formData.append("images", images[index]);
            //     }
            // }

            // Upload images using cloudinary already
            const res = await api.post("/products", {
                name,
                description,
                category,
                inStock,
                price,
                availability,
                ratingsAverage
            });

            dispatch({
                type: types.CREATE_PRODUCT_SUCCESS,
                payload: res.data.data,
            });
            dispatch(alertActions.setAlert("New product has been created!", "success"));
        } catch (error) {
            dispatch({ type: types.CREATE_PRODUCT_FAILURE, payload: error });
        }
    };

const updateProduct = (
productId, 
name,
description,
category,
inStock,
price,
availability,
ratingsAverage 
) => async (dispatch) => {
  dispatch({ type: types.UPDATE_PRODUCT_REQUEST, payload: null });
  try {
    // let formData = new FormData();
    // formData.set("title", title); ?
    // formData.set("content", content); ?
    const res = await api.put(`/products/${productId}`, { 
name,
description,
category,
inStock,
price,
availability,
ratingsAverage  });

    dispatch({
      type: types.UPDATE_PRODUCT_SUCCESS,
      payload: res.data.data,
    });
    dispatch(alertActions.setAlert("The Product has been updated!", "success"));
  } catch (error) {
    dispatch({ type: types.UPDATE_PRODUCT_FAILURE, payload: error });
  }
};

const deleteProduct = (productId) => async (dispatch) => {
  dispatch({ type: types.DELETE_PRODUCT_REQUEST, payload: null });
  try {
    const res = await api.delete(`/products/${productId}`);
    console.log(res);
    dispatch({
      type: types.DELETE_PRODUCT_SUCCESS,
      payload: res.data,
    });
    dispatch(alertActions.setAlert("The product has been deleted!", "success"));
  } catch (error) {
    dispatch({ type: types.DELETE_PRODUCT_FAILURE, payload: error });
  }
};

const setRedirectTo = (redirectTo) => ({
  type: types.SET_REDIRECT_TO,
  payload: redirectTo,
});


export const productActions = {
    productsRequest,
    getSingleProduct,
    createNewProduct,
    updateProduct,
    deleteProduct,
    setRedirectTo
};
