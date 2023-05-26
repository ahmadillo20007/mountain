import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Home from './page/Home/Home';

function App() {
  return (
    <div className="App">

<Routes>
  <Route path='/' element={<Login/>}/>

  <Route path='/home' element={<Home/>}/>

</Routes>

    </div>
  );
}

export default App;
