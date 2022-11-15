import React from "react";
import Home from "./Home";
import PrivateROute from "./PrivateROute";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";
const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/profile"
          element={
            <PrivateROute>
              <Profile />
            </PrivateROute>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoute;
