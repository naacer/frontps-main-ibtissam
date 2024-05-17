import { isPresentInFavorites } from "../../config/logic";
import { ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const initialState={
    restaurants: [],
  usersRestaurant: null,
  restaurant: null,
  loading: false,
  error: null,
  events: [],
  restaurantsEvents: [],
  categories: [],
};


 export const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
            return {...state,isLoading:true,error:null,success:null}
            
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return{...state,
                isLoading:false,
                jwt:action.payload,
                success:"Register Success",

            };
         case GET_USER_SUCCESS:
             return{
                ...state,
                isLoading:false,
                user :action.payload,
                favorites:action.payload.favorites,

            };
        case ADD_TO_FAVORITE_SUCCESS:
            return {
                ...state,
                isLoading:false,
                error:null,
                favorites:isPresentInFavorites(state.favorites,action.payload)
                ?state.favorites.filter((item)=>item.id!==action.payload.id)
                :[action.payload,...state.favorites]
            };
            case LOGOUT:
                return {
                    restaurant:null,
                    restaurants:[],
                    usersRestaurant: null,
                    loading: false,
                    error: null,
                    events: [],
                    restaurantsEvents: [],

                } ;

            case REGISTER_FAILURE:
            case LOGIN_FAILURE :
            case GET_USER_FAILURE:
            case ADD_TO_FAVORITE_FAILURE:
                return {...state,isLoading:false,error:null,success:null}
                    
        
        default:
            return state;
    }

}
