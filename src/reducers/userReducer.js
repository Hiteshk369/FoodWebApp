import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser()
const cartInfo = fetchCart()

export const initialState = {
    user : userInfo,
    foodItems : null,
    cartShow : false,
    cartItems : cartInfo 
}

const reducers = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER' : 
            return {
                ...state,
                user : action.user,
            };
        
        case 'SET_FOOD_ITEMS' :
            return {
                ...state,
                foodItems : action.foodItems,
            };
        case 'SET_CARTSHOW' :
            return {
                ...state,
                cartShow : action.cartShow,
            };
        case 'SET_CART_ITEMS' :
            return {
                ...state,
                cartItems : action.cartItems,
            };
        

        default :
            return state;
    }
}

export default reducers;