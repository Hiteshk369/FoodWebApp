import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import SaveDish from './pages/SaveDish';
import { getFoodItems } from './utils/FirebaseFunctions';
import Offerspage from './pages/Offerspage';
import Helppage from './pages/Helppage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';


function App() {

  const dispatch = useDispatch();

  const fetchItems = async() => {
    await getFoodItems().then((data)=>{
      dispatch({
        type : 'SET_FOOD_ITEMS',
        foodItems : data
      });
    });
  };

  useEffect(() => {
    fetchItems();
  },);

  return (
    <div className='w-screen h-auto flex flex-col'>
      <main className='w-full'>
        <Routes>
          <Route path='/*' element = {<Loginpage />} />
          <Route path='/home' element = {<Homepage />} />
          <Route path='/create' element = {<SaveDish />} />
          <Route path='/offers' element = {<Offerspage />} />
          <Route path='/help' element = {<Helppage />} />
          <Route path='/checkout' element = {<CheckoutPage />} />
          <Route path='/confirmation' element = {<OrderConfirmationPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
