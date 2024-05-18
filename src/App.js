import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/Darktheme';
import { CssBaseline } from '@mui/material';
import { Navbar } from './component/Navbar/navbar';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Profile from './component/Profile/Profile';
import { CustomerRoute } from './Routers/CustomerRoute';
import Cart from './component/Cart/Cart';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentification/Action';
import { findCart } from './component/State/Cart/Action';
import { store } from './component/State/store';
import Routers from './Routers/Routers';
import { getRestaurantById, getRestaurantByUserId } from './component/State/Restaurant/Action';

function App() {
     const dispatch=useDispatch()
     const jwt=localStorage.getItem("jwt")
     const auth=useSelector(store=>store.auth)
     useEffect(()=>{
         dispatch(getUser( auth.jwt || jwt));
         dispatch(findCart(jwt))
     },[auth.jwt])

     useEffect(()=>{
        dispatch(getRestaurantByUserId(auth.jwt || jwt));

     },[auth.user])
    return (
    <ThemeProvider theme = { darkTheme } >
        <CssBaseline />
       {/*<Navbar />*/}
        { /* <Home> */ }
        {/*<RestaurantDetails/>*/}
        {/* <Cart/> */}
       {/* <Profile /> */}
       
       <Routers/>

   </ThemeProvider>);
}

export default App;