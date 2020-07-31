const defaultState = {
    items 			: [],
    isShowForm  	: true,
    strSearch   	: '',
    orderBy			: 'name',
    orderDir		: 'asc',
    itemSelected	: null
}

const appReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'CLOSE_FORM':
            state.isShowForm = false;
            return state;
        case 'OPEN_FORM':
            state.isShowForm = true;
            return state;
        case 'TOGGLE_FORM':
            state.isShowForm = !state.isShowForm;
            return state;
        case 'SORT_ITEM':
            state.orderBy  = action.orderBy;
            state.orderDir = action.orderDir;
            return state;         
        default:
            return state;
    }
}

export default appReducers;