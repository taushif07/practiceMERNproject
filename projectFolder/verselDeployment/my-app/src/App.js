
import './App.css';
import Header from './Header';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";
import Payment from './Payment';


function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
    {/* Header */}
    <Header />
    <Routes>
      <Route path="/checkout" element={<Checkout /> }>
      </Route>
        {/* Home */}
      <Route path='/' element={ <Home /> }></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/payment' element={<Payment />}></Route>
    </Routes>
    </div>
  );
}

export default App;
