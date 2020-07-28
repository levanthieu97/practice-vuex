import * as TYPES from './type';
import { items } from '../utils';
import _ from 'lodash';
import * as actions from './actions';

const state = {
    products: items
}

const mutations = {
    [TYPES.ADD_PRODUCT](state, products){
        state.products.unshift(products);
    },

    [TYPES.EDIT_PRODUCT](state, products){
        _.assign(state.products[products.index],products.product);
    },

    [TYPES.DELETE_PRODUCT](state, products){
        state.products.splice(products.index,1);
    }
}

const getters = {
    listProduct : state => state.products
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
