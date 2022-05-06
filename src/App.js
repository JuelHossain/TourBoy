import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
