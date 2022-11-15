import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./Redux/Auth/actions";

const Home = () => {
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state);
  console.log(Auth);

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>THIS IS MY HOME</h1>
      <input placeholder="Email" name="email" onChange={handleInput} />
      <br />
      <input placeholder="Password" name="password" onChange={handleInput} />
      <br />
      <button
        onClick={() => {
          
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default Home;
