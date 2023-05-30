import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './page/Home/Home';

function App() {
  return (
    <div className="App">

<Routes>
  <Route path='/login' element={<Login/>}>
    <Route path='' element={<SignIn/>}/>
    <Route path='signup' element={<SignUp/>}/>
  </Route>

  <Route path='/' element={<Home/>}/>

</Routes>

    </div>
  );
}

export default App;
