import logo from './logo.svg';
import './App.css';
import { MyProvider } from './AppContext';
import Login from './ui/login/Login';
import Home from './ui/home/Home';

function App() {
  return (
    <div>
       <MyProvider>
       <Login />
       <Home />
       </MyProvider>
      
    </div>
  );
}

export default App;
