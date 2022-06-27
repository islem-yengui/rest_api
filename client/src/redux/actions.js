import axios from "axios";
import { ADDUSERS, DELETEUSER, EDITUSER, GETUSERS } from "./actionTypes";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/users");
    console.log(res.data);
    dispatch({
      type: GETUSERS,
      payload: res.data,
    });
  } catch (error) {
    alert("get error!");
  }
};

export const addUser = (newUser) => async (dispatch) => {
  try {
    const res = await axios.post("/add", newUser);
    console.log(res);
    dispatch({
      type: ADDUSERS,
      payload: res.data,
    });
  } catch (error) {
    alert("add error");
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/user/${id}`);
    dispatch({
      type: DELETEUSER,
      payload: {
        x: id,
        msg: res.data,
      },
    });
  } catch (error) {
    alert("delete error");
  }
};

export const editUser = (editedUser) => async (dispatch) => {
  try {
    const res = await axios.put(`/edit/${editedUser._id}`, editedUser);
    dispatch({
      type: EDITUSER,
      payload: {
        x: editedUser._id,
        data: res.data,
      },
    });
  } catch (error) {
    alert("edit error");
  }
};
