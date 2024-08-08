/**********************************************************
 * REDUX 1: Create an action function for each CRUD operation.
 * The function should create a JSON that includes a 'type'.
 * You can also pass a value (e.g., element) which is used
 * during the CRUD operation. In the below example, the value
 * is a JSON object generically called element because it
 * refers to an element in a JSON array. 
 **********************************************************/
export const addElement = (element) => {
    return { 'type': 'ADD_ELEMENT', 'element': element}
}
export const deleteElement = (element) => {
    return { 'type': 'DELETE_ELEMENT', 'element': element}
}
