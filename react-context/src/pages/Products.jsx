import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Products = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <div>
        <h1>Products</h1>
        <p>Valor do contador: {counter}</p>
      </div>
    </div>
  );
};

export default Products;
