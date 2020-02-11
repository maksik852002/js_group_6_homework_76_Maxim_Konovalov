import {
  GET_MESSAGES_SUCCSESS,
  GET_MESSAGES_FAILURE,
  SEND_MESSAGES_FAILURE,
  CLOSE_MODAL
} from "../store/actions";

const initialState = {
  messages: [],
  datetime: "",
  loading: true,
  error: "",
  show: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return { ...state, show: false, loading: false, error: "" };
    case GET_MESSAGES_SUCCSESS:
      return {
        ...state,
        messages: action.data,
        datetime: action.datetime,
        loading: false
      };
    case GET_MESSAGES_FAILURE:
      return { ...state, error: action.error, show: true, loading: false };
    case SEND_MESSAGES_FAILURE:
      return { ...state, error: action.error, show: true };
    default:
      return state;
  }
};

export default reducer;
