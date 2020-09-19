import * as types from "../constants/order.constants";

const initialState = {
    products: [],
    selectedProduct: null,
    loading: false,
    order: null,
};

const orderReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case types.SHIPPING_INFO_REQUEST:

            return { ...state, order: payload } //???

        default:
            return state;
    }
};

export default orderReducer;