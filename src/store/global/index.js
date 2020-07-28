import * as TYPES from './types';
import * as getters from './getter';
import * as actions from './action';

const DEFAULT_SNACKBAR = {
    show: false,
    color: '',
    text: ''
};

const state = {
    drawerAppBar: true,
    snackbar: { ...DEFAULT_SNACKBAR }
};

const MSG_TYPE_COLORS = {
    error: '#eb3b5a',
    success: '#20bf6b',
    warning: '#fd9644'
}

const showMsg = (state, {type, message }) => {
    state.snackbar = {
        show: true,
        text: message,
        color: MSG_TYPE_COLORS[type]
    };
};

const mutations = {
    [TYPES.APP_BAR_DRAWER](state,flag){
        state.drawerAppBar = flag;
        console.log(state.drawerAppBar);
    },

    [TYPES.SUCCESS_MSG](state, message){
        showMsg(state, { type: 'success', message });
    },

    [TYPES.ERROR_MSG](state, message){
        showMsg(state, { type: 'error', message });
    },

    [TYPES.WARNING_MSG](state, message){
        showMsg(state, {type: 'warning', message });
    },

    [TYPES.RESET_SNACKBAR](state){
        state.snackbar = [...DEFAULT_SNACKBAR];
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}