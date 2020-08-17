const defaultState = {orderBy: "name", orderDir: "asc"};

const sortReducer = (state = defaultState, action) => {
    let {orderBy, orderDir} = action;

    switch (action.type) {
        case 'SORT_ITEM':            
            return {orderBy, orderDir};         
        default:
            return state;
    }
}

export default sortReducer;