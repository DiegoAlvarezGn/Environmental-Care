import { Outlet } from 'react-router-dom';
import './App.css';
import Main from './routes/Main';

function App() {
  return (
    <div className="App">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
