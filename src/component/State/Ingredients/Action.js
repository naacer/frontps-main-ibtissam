import { api } from "../../config/api";
import { CREATE_INGREDIENT_CATEGORY_SUCCESS, CREATE_INGREDIENT_SUCCESS, GET_INGERDIENTS, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionTypes";
export const getIngerdientsOfRestaurant=({ id, jwt})=>{
    return async(dispatch) =>  {
        try {
            const response =await api.post(`/api/admin/ingredients/restaurant/${id}`,reqData.order,
              {
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
              });
              console.log("get all ingredients",response.data);
              dispatch({type:GET_INGERDIENTS,payload:response.data})
           
    
        } catch (error) {
            console.log("error",error);
           
            
        }
}

};
export const createIngredient=({ data, jwt})=>{
    return async(dispatch) =>  {
        try {
            const response =await api.post(`/api/admin/ingredients`,data,
              {
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
              });
        
              console.log("create ingredients",response.data);
              dispatch({type:CREATE_INGREDIENT_SUCCESS,payload:response.data})
           
    
        } catch (error) {
            console.log("error",error);
            
        }
};

};
export const createIngredientCategory=({ data, jwt})=>{
    console.log("data",data, "jwt",jt)
    return async(dispatch) =>  {
        try {
            const response =await api.post(`/api/admin/ingredients/category`,data,
              {
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
              });
        
              console.log("create ingredients category",response.data);
              dispatch({type:CREATE_INGREDIENT_CATEGORY_SUCCESS,payload:response.data})
           
    
        } catch (error) {
            console.log("error",error);
            
        }
};

};
export const getIngredientCategory=({ id, jwt})=>{
    return async(dispatch) =>  {
        try {
            const response =await api.get(`/api/admin/ingredients/restaurant/${id}/category`,
              {
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
              });
        
              console.log("get ingredients category",response.data);
              dispatch({type:GET_INGREDIENT_CATEGORY_SUCCESS,payload:response.data})
           
    
        } catch (error) {
            console.log("error",error);
            
        }
};

};
export const updateStockOfIngredients=({ id, jwt})=>{
    return async(dispatch) =>  {
        try {
            const {data} =await api.put(`/api/admin/ingredients/${id}/stock`,
            {},
              {
                headers:{
                    Authorization:`Bearer ${jwt}`,
                },
              });
        
              console.log("update igredients stock",data);
              dispatch({type:UPDATE_STOCK,payload:data})
           
    
        } catch (error) {
            console.log("error",error);
            
        }
};

};