import * as types from "../constants/user.constants";
import { conversationTypes } from "../../config/constants";

const globalConversation = {
  _id: conversationTypes.GLOBAL,
  type: conversationTypes.GLOBAL,
};

const initialState = {
  users: [],
  conversations: [globalConversation],
  totalPageNum: 1,
  selectedUser: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_USERS_REQUEST:
    

    case types.GET_USERS_SUCCESS:


    case types.GET_USERS_FAILURE:
    

    default:
      return state;
  }
};

export default userReducer;
