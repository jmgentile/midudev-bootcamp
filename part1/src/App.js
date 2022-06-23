import './App.css';
import logo from './logo.svg';
import Message from './Message.js';
import Description from './Description.js';

const App = () => {
  return (
    <div className="App">
      <header>
      <img src={logo} className="App-logo" alt="logo" />
      <Message color="#212529" msg="Estamos trabajando..."/>
      <Message color="#212529" msg="En un curso..."/>
      <Message color="#212529" msg="De React."/>
      <Description color="#4f5963" msg="Esta es la app del curso de Fullstack Bootcamp."/>
      </header>
    </div>
  );
}

export default App;
