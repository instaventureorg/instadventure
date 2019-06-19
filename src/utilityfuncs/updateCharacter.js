import React from "react";
import fireApp from "../fire.js";

export function updateCharacter(characterObj) {
  const ref = fireApp
    .firestore()
    .collection("games")
    .doc(characterObj.gameId)
    .collection("character");
  let gameRef = ref
    .doc(characterObj.characterId)
    .update(characterObj)
    .then(newRef => {
      console.log("Updated character from gameid: ", newRef.id);
    });
}
