import {LOADER_ACTIONS} from '../Utils/actionTypes';

export const showLoader = () => ({
    type: LOADER_ACTIONS.SHOW_LOADER,
})

export const hideLoader = () => ({
    type: LOADER_ACTIONS.HIDE_LOADER,
})