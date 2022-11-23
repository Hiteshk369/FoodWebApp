import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser()

export const initialState = {
    user : userInfo,
    foodItems : null,
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
                foodItems : action.foodItems
            }
        default :
            return state;
    }
}

export default reducers;