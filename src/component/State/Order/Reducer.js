import { GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionTypes";


const initialState = {
    loading:false,
    orders:[],
    error:null,
    notification:[]
};
export const orderReducer =(state = initialState,action) =>{
    switch(action.type){
        case GET_USERS_ORDERS_REQUEST:
            return { ...state,
                error:null,
                loading: true
            };
        case GET_USERS_ORDERS_SUCCESS:
            return {
                ...state,
                error:null,
                loading:false,
                orders : action.payload,
            };
        case GET_USERS_ORDERS_FAILURE:
            return{ ...state,
                notification:action.payload,
                error:null,
                loading: false
            };
        default:
            return state;
        }
};
