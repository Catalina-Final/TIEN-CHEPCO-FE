import * as types from "../constants/auth.constants";
import calcCart from "../helpers"

const initialState = {
  user: {},
  accessToken: localStorage.getItem("accessToken"),
  isAuthenticated: undefined,


  products: [],
  totalPageNum: 1,
  selectedProduct: null,
  loading: false,
  cart: [],
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
    case types.LOGIN_FACEBOOK_REQUEST:
    case types.LOGIN_GOOGLE_REQUEST:
    case types.REGISTER_REQUEST:
    case types.GET_CURRENT_USER_REQUEST:
    case types.UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };

    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOGIN_FACEBOOK_SUCCESS:
    case types.LOGIN_GOOGLE_SUCCESS:
      localStorage.setItem("accessToken", payload.accessToken);
      return {
        ...state,
        user: { ...payload.user, cart: payload.cart },
        accessToken: payload.accessToken,
        loading: false,
        isAuthenticated: true,
      };

    case types.LOGIN_FAILURE:
    case types.LOGIN_FACEBOOK_FAILURE:
    case types.LOGIN_GOOGLE_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
      return { ...state, loading: false, isAuthenticated: false };

    case types.UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false, user: { ...state.user, payload } };

    case types.REGISTER_FAILURE:
    case types.UPDATE_PROFILE_FAILURE:
      return { ...state, loading: false };

    case types.GET_CURRENT_USER_SUCCESS:
      console.log(payload)
      return {
        ...state,
        cart: calcCart(payload.cart.products),
        user: payload.user,
        loading: false,
        isAuthenticated: true,
      };
    case "DONE":

      return {
        ...state,
        isAuthenticated: true,
      }
    case types.LOGOUT:
      return {
        ...state,
        accessToken: null,
        isAuthenticated: false,
        user: {},
        loading: false,
      };

    case types.PRODUCT_REQUEST:
    case types.GET_SINGLE_PRODUCT_REQUEST:
    case types.CREATE_PRODUCT_REQUEST:
    case types.UPDATE_PRODUCT_REQUEST:
    case types.DELETE_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case types.PRODUCT_REQUEST_SUCCESS:
      return {
        ...state,
        products: payload.totalProducts,
        totalPageNum: payload.totalPages,
        loading: false,
      };

    case types.GET_SINGLE_PRODUCT_REQUEST_SUCCESS:
      return { ...state, selectedProduct: payload, loading: false };

    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        selectedProduct: payload,
        loading: false,
        redirectTo: "__GO_BACK__",
      };

    case types.PRODUCT_REQUEST_FAILURE:
    case types.GET_SINGLE_PRODUCT_REQUEST_FAILURE:
    case types.CREATE_PRODUCT_FAILURE:
    case types.UPDATE_PRODUCT_FAILURE:
    case types.DELETE_PRODUCT_FAILURE:
      return { ...state, loading: false };

    case types.CREATE_PRODUCT_SUCCESS:
      return { ...state, loading: false, redirectTo: "__GO_BACK__" };

    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedBlog: {},
        redirectTo: "__GO_BACK__",
      };
    // case types.ADD_PRODUCT_TO_CART:
    //   // payload = {productID:'...', qty: 1}
    //   const item = state.cart.find(product => product._id === payload._id)
    //   if (item) {
    //     return {
    //       ...state, cart: state.cart.map(product => {
    //         if (product._id !== payload._id) return product;
    //         return { ...product, qty: product.qty + payload.qty }
    //       })
    //     }
    //   } else {
    //     return { ...state, cart: [...state.cart, payload] }
    //   }
    case types.ADD_PRODUCT_TO_CART:

      return { ...state, cart: calcCart(payload.products) }
    case types.REMOVE_PRODUCT_FROM_CART:
      return {...state, cart: calcCart(payload.products)}
    case types.REMOVE_PRODUCT_FROM_ORDER:
        return {...state, cart: calcCart(payload.products)}
    case types.BILL_REQUEST:
        return {...state, cart: calcCart(payload.products)}


    default:
      return state;
  }
};

export default authReducer;
