import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, getUsers } from "../redux/actions";

const AddUser = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      fullName,
      email,
      phone,
    };
    dispatch(addUser(newUser));
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddUser;
