import * as TYPES from './types';

export const toggleDrawer = ({commit}, flag = true) => {
    commit(TYPES.APP_BAR_DRAWER, flag);
}

export const resetMsg = ({commit}) => {
    commit(TYPES.RESET_SNACKBAR);
}

export const showSuccessMsg = ({commit}, msg) => {
    commit(TYPES.SUCCESS_MSG, msg);
}

export const showErrorMsg = ({commit}, msg) => {
    commit(TYPES.ERROR_MSG, msg);
}

export const showWarningMsg = ({commit}, msg) => {
    commit(TYPES.WARNING_MSG, msg);
}