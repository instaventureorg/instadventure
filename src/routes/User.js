import React from "react";
import fireApp from "../fire";
import firebase from "firebase";

const UserPage = props => {
  console.log("userpage props", props);
  return (
    <div>
      <p>Welcome, {props.displayName}</p>
    </div>
  );
};

export default UserPage;
