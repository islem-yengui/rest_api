const { GETUSERS, ADDUSERS, DELETEUSER, EDITUSER } = require("./actionTypes");

const init = {
  users: [],
  loading: true,
  msg: null,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GETUSERS:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case ADDUSERS:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case DELETEUSER:
      return {
        ...state,
        msg: payload.msg,
        users: state.users.filter((el) => el._id !== payload.x),
      };
    case EDITUSER:
      return {
        ...state,
        users: state.users.map((el) =>
          el._id === payload.x ? payload.data : el
        ),
      };
    default:
      return state;
  }
};

export default reducer;
