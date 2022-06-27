import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../redux/actions";
import EditUser from "./EditUser";

const UserList = () => {
  const { users, loading, msg } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: "40%",
      }}
    >
      {loading ? (
        <h2>loading...</h2>
      ) : (
        users.map((el) => (
          <div style={{ border: "1px solid black", width: "40%" }}>
            <h2>{el.fullName}</h2>
            <p> {el.email} </p>
            <EditUser user={el} />
            <button onClick={() => dispatch(deleteUser(el._id))}>Delete</button>
          </div>
        ))
      )}
      {msg && <h2> {msg} </h2>}
    </div>
  );
};

export default UserList;
