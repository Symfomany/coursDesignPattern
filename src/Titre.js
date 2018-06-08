import React from "react";

import Message from "./Message";

// Composant fonctionnel
// Destructuring function
// fn(objet) => fn({prenom, email})
function Titre({ meteo, temperature }) {
  return (
    <h1>
      Bientôt le week-end ({temperature}°)
      <Message meteo={meteo} />
    </h1>
  );
}

export default Titre;
