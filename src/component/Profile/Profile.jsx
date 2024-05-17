import React ,{useState} from 'react'
import { ProfileNavigation } from './ProfileNavigation'
import { Route, Routes } from 'react-router-dom';
import Orders from './Orders';
import { Events } from './Events';
import { Favorites } from './Favorites';
import { Address } from './Address';
import { UserProfile } from './UserProfile';

const Profile = () => {
const [openSideBar]=useState(false);
    return ( 
        <div className = 'lg:flex justify-between' >
            <div className = ' h-[80vh] lg:w-[20%]' >
                <ProfileNavigation open={openSideBar}/>
            </div> 
            <div className = 'lg:w-[80%]' >
<Routes>
    <Route path='/' element={<UserProfile/>}/>
    <Route path='/Orders' element={<Orders/>}/>
    <Route path='/address' element={<Address/>}/>
    <Route path='/favorites' element={<Favorites/>}/>
    <Route path='/events' element={<Events/>}/>
</Routes>
            </div> 
        </div>
    )
}
// /my-profile/orders
export default Profile