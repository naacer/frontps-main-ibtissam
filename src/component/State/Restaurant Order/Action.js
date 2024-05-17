import { api } from "../../config/api";
import { GET_RESTAURANTS_ORDER_FAILURE, GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionTypes";


export const updateOrderStatus=({ orderId, orderStatus,jwt})=>{
    return async(dispatch) =>  {
        dispatch({type: UPDATE_ORDER_STATUS_REQUEST});
        try {
            const response=await api.put(`/api/admin/orders/${orderId}/${orderStatus}`,{},
              {
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
              });
              const updatedOrder = response.data;
              console.log("updated Order ",updatedOrder);
              dispatch({type:UPDATE_ORDER_STATUS_SUCCESS,payload:updatedOrder})
           
    
        } catch (error) {
            console.log("error",error);
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE,payload:error})
            
        }
}

}
export const fetchRestaurantsOrder =({ restaurantId, orderStatus,jwt})=>{
    return async(dispatch) =>  {
        dispatch({type: GET_RESTAURANTS_ORDER_REQUEST});
        try {
            const {data}=await api.put(`/api/admin/order/restaurant/${restaurantId}`, 
              {
                params: { order_status: orderStatus},
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
              });
              const orders = data;
              console.log("updated Order ",orders);
              dispatch({type:GET_RESTAURANTS_ORDER_SUCCESS,payload:updatedOrder})
           
    
        } catch (error) {
            console.log("error",error);
            dispatch({type:GET_RESTAURANTS_ORDER_FAILURE,payload:error})
            
        }
}

}