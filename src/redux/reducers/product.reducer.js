import * as types from "../constants/product.constants";
import calcCart from "../helpers"

const initialState = {
    products: [],
    totalPageNum: 1,
    selectedProduct: null,
    loading: false,
    cart: null,
};

const productReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "UPDATE_CART_ON_REFRESH":
            return { ...state, cart: calcCart(payload) };
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
        case types.SET_REDIRECT_TO:
            return {
                ...state,
                redirectTo: payload
            }
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

        case types.ADD_PRODUCT_TO_CART:
        case types.REMOVE_PRODUCT_FROM_CART:
        case types.EDIT_QTY_IN_CART:
            return { ...state, cart: payload }

        default:
            return state;
    }
};

export default productReducer;
