import React from "react";
import fireApp from "../fire.js";

export function createGame(gameObj) {
  const ref = fireApp.firestore().collection("games");
  let gameRef = ref.add(gameObj).then(newRef => {
    console.log("Added document with id: ", newRef.id);
  });
}
