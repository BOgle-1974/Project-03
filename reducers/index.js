/**********************************************************
 * REDUX 3: Combine all REDUX reducers using the REDUX
 * combineReducers fuction, which accepts a JSON containing
 * a comma separated key:value pair for each reducer you
 * defined in the previous step (see REDUX 2). In the below
 * example, 'elements' is a alias to the function 
 * elementReduces. This means that later when you reference
 * 'elements', you are really referencing the result of the
 * elementReducer function.
 **********************************************************/
import elementReducer from './elements'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    elements: elementReducer
})
export default allReducers