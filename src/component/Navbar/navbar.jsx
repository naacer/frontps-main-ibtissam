import { Avatar, IconButton ,Badge, Box} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import "./Navbar.css";
import { Person } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Navbar = () => {
  const {auth,cart}=useSelector((store) => store);
  const navigate=useNavigate();
  const handleAvatarClick=()=>{
    if(auth.user.role==="ROLE_CUSTOMER"){
      navigate("/my-profile")
    }
    else{
      navigate("/admin/restaurant")
    }

  }

  return (
    
    <Box
    
    className='px-5 sticky z-50 py-[.8rem] bg-[#7ca41e] lg:px-8 flex justify-between'>
  <div className='lg:mr-10 cursor-pointer flex items-center space-x-1'>
    <img onClick={()=>navigate("/")} src="./9ossos.ico" alt="9ossos Logo" className="logo-image" />
    <li onClick={()=>navigate("/")} className='logo font-style: italic font-semibold text-gray-100 text-2xl'>
      Qossos
    </li>
  </div>
      <div className='flex items-center space-x-2 lg:space-x-10'>
        <div>
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className=''>
           {auth.user ? (
  <Avatar onClick={handleAvatarClick} sx={{bgcolor:"white",color:"green"}}>
    {auth.user.fullName ? auth.user.fullName[0].toUpperCase() : ""}
  </Avatar>
) : (
  <IconButton onClick={()=>navigate("/account/login")}>
    <Person/>
  </IconButton>
)}


        </div>
        <div>
          <IconButton onClick={()=>navigate("/cart")}>
            <Badge color="primary" badgeContent={cart.cart?.item.length
}>
            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
            </Badge>
            
          </IconButton>
        </div>
      </div>
    </Box>
  );
}
