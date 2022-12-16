import React from "react";
import { NavLink } from "react-router-dom";
import {CartState } from "../Context";

const Header = () => {
  const {carter} = CartState()
  return (
    <div className="bg-slate-400">
        <ul className="flex justify-around border py-4">
          <li>
            <NavLink className="text-2xl" to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink className="text-2xl" to="/cart">Cart ({carter.length})</NavLink>
          </li>
        </ul>
    </div>
  );
};

export default Header;
