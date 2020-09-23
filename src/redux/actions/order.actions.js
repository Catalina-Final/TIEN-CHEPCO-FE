import * as types from "../constants/order.constants";
import api from "../api";
import { alertActions } from "./alert.actions";

const createOrder = (fullName, phone, address) => async (dispatch) => {
    dispatch({ type: types.SHIPPING_INFO_REQUEST, payload: null });
    try {

        const res = await api.post(
            `/orders`,
            {
                fullName,
                phone,
                address,
            }
        );
        alert("In actions")
        dispatch({
            type: types.SHIPPING_INFO_REQUEST_SUCCESS,
            payload: res.data.data,
        });
    } catch (error) {
        dispatch({ type: types.SHIPPING_INFO_REQUEST_FAILURE, payload: error });
    }
};

const ordersAdminRequest = () => async (dispatch) => {
    dispatch({ type: types.ORDERS_ADMIN_REQUEST, payload: null });
    try {
        const res = await api.get(
            `/orders/admin`
        );
        dispatch({
            type: types.ORDERS_ADMIN_REQUEST_SUCCESS,
            payload: res.data.data,
        });

    } catch (error) {
        dispatch({ type: types.ORDERS_ADMIN_REQUEST_FAILURE, payload: error });
    }
}
const ordersUserRequest = () => async (dispatch) => {
    dispatch({ type: types.ORDERS_USER_REQUEST, payload: null });
    try {
        const res = await api.get(
            `/orders/user`
        );
        console.log(res)
        dispatch({
            type: types.ORDERS_USER_REQUEST_SUCCESS,
            payload: res.data.data,
        });

    } catch (error) {
        dispatch({ type: types.ORDERS_USER_REQUEST_FAILURE, payload: error });
    }
}

const updateOrderStatus = (orderId) => async (dispatch) => {
    dispatch({ type: types.UPDATE_ORDER_STATUS_REQUEST, payload: null });
    try {
        const res = await api.put(
            `/orders/${orderId}`
        );
        console.log(res)
        dispatch({
            type: types.UPDATE_ORDER_STATUS_SUCCESS,
            payload: orderId,
        });

    } catch (error) {
        dispatch({ type: types.UPDATE_ORDER_STATUS_FAILURE, payload: error });
    }
}


export const orderActions = {
    createOrder,
    ordersAdminRequest,
    ordersUserRequest,
    updateOrderStatus,
};
