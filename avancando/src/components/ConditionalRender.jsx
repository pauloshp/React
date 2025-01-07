import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name, setName] = useState("Matheus");

  return (
    <div>
      <h1>Isso será exbido?</h1>
      {x && <h2>Se x for true, sim!</h2>}
      {!x && <h2>Se x for false, não!</h2>}
      <h1>If ternário</h1>
      {name === "Paulo" ? (
        <div>
          <p>O nome é Paulo</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("Paulo")}>Clique aqui!</button>
    </div>
  );
};

export default ConditionalRender;
