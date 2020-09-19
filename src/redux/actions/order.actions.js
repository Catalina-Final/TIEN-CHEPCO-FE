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
        dispatch({
            type: types.SHIPPING_INFO_REQUEST_SUCCESS,
            payload: res.data.data,
        });
    } catch (error) {
        dispatch({ type: types.SHIPPING_INFO_REQUEST_FAILURE, payload: error });
    }
};



export const orderActions = {
    createOrder,

};
