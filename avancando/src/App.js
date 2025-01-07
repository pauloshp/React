import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const [userName] = useState('João');

  const cars = [
    { id: 1, brand: 'Ferrari', km: 0, color: 'Preto', newCar: true },
    { id: 2, brand: 'Lamborghini', km: 10000, color: 'Vermelho', newCar: false },
    { id: 3, brand: 'Porsche', km: 5000, color: 'Azul', newCar: false },
  ]

  function showMessage() {
    alert('Você clicou no botão!');
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  const users = [
    { id: 1, name: 'João', job: 'Desenvolvedor', age: 25 },
    { id: 2, name: 'Maria', job: 'Advogada', age: 31 },
    { id: 3, name: 'José', job: 'Estudante', age: 17 },
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={userName} />
      <CarDetails brand="Ford" km={10000} color="Preto" newCar={false} />
      <CarDetails brand="BMW" km={0} color="Vermelho" newCar={true} />
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />  
      ))}
      <Fragment propFragment="teste" />
      <Container myValue={10}>
        <p>E este é o conteúdo</p>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {users.map((user) => (
        <UserDetails key={user.id} name={user.name} job={user.job} age={user.age} />
      ))}
    </div>
  );
}

export default App;
