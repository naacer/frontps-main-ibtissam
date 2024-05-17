import React , {useEffect} from 'react';
import "./Home.css";
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCard from '../Restaurant/RestaurantCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRestaurantsAction } from '../State/Restaurant/Action';
import { findCart } from '../State/Cart/Action';

const Home = () => {
  const dispatch= useDispatch()
  const jwt = localStorage.getItem("jwt")
  const  { restaurant  }  =useSelector(store=>store)
  console.log("restaurant" , restaurant)

  useEffect(() => {
    dispatch(getAllRestaurantsAction(jwt))
}, [dispatch, jwt]);

  return (
    <div className='pb-10'>
      <section className='banner z-50 relative flex flex-col justify-center items-center'>
        <div className='w-1/2 z-10 text-center'>
          <p className='text-2xl lg:text-6xl   font-style: italic font-semibold py-5'>Qossos</p>
          <p className='text-gray-200 text-5xl lg:text-4xl'> ! فيك جوع ؟ عندنا الحل</p>
        </div>
        <div className='cover absolute top-0 left right-0'></div>
        <div className='fadout'></div>
      </section>

      <section className='p-10 lg:py-20 lg:px-20 pt-10'>
        <p className='text-2xl font-semibold text-gray-400 py-3 pb-5'> Top Meals </p>
        <MultiItemCarousel/>
      </section>

      <section>
        <h1 className='text-2xl font-semibold text-gray-400 py-3'>Tleb a7ssan makayn 3end 9ossos</h1>
        <div className='flex flex-wrap items-center justify-around gap-5'>
            {
              restaurant.restaurants.map((item)=><RestaurantCard item={item}/>)
            }
        </div>
      </section>
    </div>
  );
}

export default Home;
