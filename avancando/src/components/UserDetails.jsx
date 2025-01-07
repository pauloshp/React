const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? <p>É maior de idade</p> : <p>É menor de idade</p>}
    </div>
  );
};

export default UserDetails;
