import * as TYPES from './type';

export const changeProduct =  ({ commit }, param ) => {
    if(param.type === 'create'){
        console.log("create")
        commit(TYPES.ADD_PRODUCT,param.product);
    }else if(param.type === 'edit'){
        console.log("edit")
        commit(TYPES.EDIT_PRODUCT,param);
    }else if(param.type === 'delete'){
        commit(TYPES.DELETE_PRODUCT, param);
    }
}