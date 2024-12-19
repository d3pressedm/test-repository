import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Это тестовый проект Бредин И. Е. и изменения в нем";

  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}
      </header>
    </div>
  );
}

export default App;
