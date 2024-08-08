/*****************************************************************
 * REDUX 2: Create a reducer for each variable needed to be
 * stored in REDUX. The action function from the previous step
 * (see REDUX 1) set the 'type' and a variable )e.g. element)
 * to hold the value. In this case, the action.element variable
 * contains a JSON used containing values used by each of the
 * CRUD operations.
 ***************************************************************/
const elementReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case 'ADD_ELEMENT':
            return [...state, action.element];
            case 'DELETE_ELEMENT':
                newState = state.filter( element => element.id !== action.element.id)
                return newState;
                default:
                    return state;
    }
}
export default elementReducer;