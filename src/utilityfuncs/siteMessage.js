import React from "react";
import fireApp from "../fire.js";

export function siteMessage(messageObj) {
  const ref = fireApp.firestore().collection("messages");
  const newMessage = ref
    .add(messageObj)
    .then(newRef => console.log("newref added ", newRef));
}
