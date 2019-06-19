import React from "react";
import fireApp from "../fire.js";

export function gameMessage(messageObj) {
  const ref = fireApp
    .firestore()
    .collection("games")
    .doc(messageObj.gameId)
    .collection("messages");
  const newMessage = ref
    .add(messageObj)
    .then(newRef => console.log("newref added ", newRef));
}
