import * as Types from './../contants/ActionTypes';

var initialState = {};

const editProduct = (state = initialState, action) =>{
    switch(action.type){
        case Types.UPDATE_PRODUCT:
            return action.product
        default: return state;
    }
}
export default editProduct;
