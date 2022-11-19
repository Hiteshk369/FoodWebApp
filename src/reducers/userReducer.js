import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser()

export const initialState = {
    user : userInfo
}

const reducers = (state = initialState, action) => {
    switch(action.type){
        case 'SET_USER' : 
            return {
                ...state,
                user : action.user,
            };
        default :
            return state;
    }
}

export default reducers;