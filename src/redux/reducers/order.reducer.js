import * as types from "../constants/order.constants";

const initialState = {
    products: [],
    totalPageNum: 1,
    selectedProduct: null,
    loading: false,
    order: {
        order: []
    },
    paid: false
};

const orderReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case types.SHIPPING_INFO_REQUEST:

            return { ...state, orders: payload } //???
        case types.ORDERS_ADMIN_REQUEST_SUCCESS:
            return {
                ...state,
                orders: payload.totalOrders,
                // totalPageNum: payload.totalPages,
                loading: false,
            };
        case types.ORDERS_USER_REQUEST_SUCCESS:
            return {
                ...state,
                orders: payload.totalOrders,
                // totalPageNum: payload.totalPages,
                loading: false,
            };
        case types.UPDATE_ORDER_STATUS_SUCCESS:
            return {
                ...state,
                orders: state.orders.map(order => {
                    if (order._id !== payload) return order;
                    return { ...order, paid: true }
                }),
                loading: false
            }
        default:
            return state;
    }
};

export default orderReducer;