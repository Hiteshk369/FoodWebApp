export const initialState = {
    filterItem : 'All Dishes',
    OrderId : '',
}

const reducersItem = (state = initialState , action) => {
    switch(action.type){
        case 'SET_FILTER_ITEM':
            return {
                ...state,
                filterItem : action.filterItem
            };
        case 'SET_ORDER_ID' :
            return{
                ...state,
                OrderId : action.OrderId
            };
        default : 
            return state;
    }
}

export default reducersItem;