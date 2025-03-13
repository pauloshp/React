import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useContext(CounterContext);

  const { color } = useTitleColorContext();

  return (
    <div>
      <div>
        <h1 style={{ color: color }}>About</h1>
        <p>Valor do contador: {counter}</p>
      </div>
    </div>
  );
};

export default About;
