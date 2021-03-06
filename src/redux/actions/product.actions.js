import * as types from "../constants/product.constants";
import api from "../api";
import { alertActions } from "./alert.actions";

const productsRequest = () => async (dispatch) => {
  dispatch({ type: types.PRODUCT_REQUEST, payload: null });
  try {

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
const productsAdminRequest = () => async (dispatch) => {
  dispatch({ type: types.PRODUCT_ADMIN_REQUEST, payload: null });
  try {

    const res = await api.get(
      `/admin/products`
    )
    dispatch({
      type: types.PRODUCT_ADMIN_REQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.PRODUCT_ADMIN_REQUEST_FAILURE, payload: error });
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
  ratingsAverage,
  inStock,
  availability,
  price,
  images) => async (dispatch) => {
    dispatch({ type: types.CREATE_PRODUCT_REQUEST, payload: null });
    try {

      const res = await api.post("/admin/products/add", {
        name,
        description,
        category,
        ratingsAverage,
        inStock,
        availability,
        price,
        images
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
  ratingsAverage,
  inStock,
  availability,
  price,
  images
) => async (dispatch) => {
  dispatch({ type: types.UPDATE_PRODUCT_REQUEST, payload: null });
  try {

    const res = await api.put(`/admin/products/${productId}`, {
      name,
      description,
      category,
      ratingsAverage,
      inStock,
      availability,
      price,
      images
    });

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
    const res = await api.delete(`/admin/products/${productId}`);

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

const addProductToCart = (productId, qty = 1) => async (dispatch) => {
  try {
    const res = await api.post("/products/cart", { product: productId, quantity: qty });
    dispatch({ type: types.ADD_PRODUCT_TO_CART, payload: res.data.data });
  } catch (error) {
    console.log(error)
  }
}

const removeProductFromCart = (productId) => async (dispatch) => {
  try {
    const res = await api.delete(`/products/cart/${productId}`);
    dispatch({ type: types.REMOVE_PRODUCT_FROM_CART, payload: res.data.data });
  } catch (error) {
    console.log(error)
  }
}

const updateProductFromCart = (productId, quantity) => async (dispatch) => {
  try {
    const res = await api.put(`/products/cart/${productId}`, { quantity });
    dispatch({ type: types.EDIT_QTY_IN_CART, payload: res.data.data });
  } catch (error) {
    console.log(error)
  }
}

export const productActions = {
  productsRequest,
  productsAdminRequest,
  getSingleProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
  setRedirectTo,
  addProductToCart,
  removeProductFromCart,
  updateProductFromCart
};
