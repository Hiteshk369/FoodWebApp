export const initialState = {
    filterItem : 'All Dishes'
}

const reducersItem = (state = initialState , action) => {
    switch(action.type){
        case 'SET_FILTER_ITEM':
            return {
                ...state,
                filterItem : action.filterItem
            }
        default : 
            return state;
    }
}

export default reducersItem;