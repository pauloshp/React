const Challenge = () => {
  const a = 6;
  const b = 4;

  const handleCalculo = () => {
    return console.log( a + b);
  }

  return (
    <div>
      <p>A: {a}</p>
      <p>B: {b}</p>
      <button onClick={handleCalculo}>Calcular</button>
    </div>
  );
};

export default Challenge;
