import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Paulo", "Matheus", "Pedro"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Paulo", age: 26 },
    { id: 2, name: "Matheus", age: 21 },
    { id: 3, name: "Pedro", age: 30 },
  ]);

  const deleteRamdom = () => {
    const ramdomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => ramdomNumber !== user.id);
    });
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRamdom}>Detete ramdom user</button>
    </div>
  );
};

export default ListRender;
