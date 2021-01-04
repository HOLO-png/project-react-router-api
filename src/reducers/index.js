import {combineReducers} from 'redux';
import products from './products';
import editProduct from './editProduct';

const myReducer = combineReducers({
    products,
    editProduct
});

export default myReducer;