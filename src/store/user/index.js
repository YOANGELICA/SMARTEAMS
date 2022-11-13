import { createStore } from "vuex";
import state from './state';
import  * as actions from './actions';
import * as mutations from './mutations';


const userStore = {
    namespaced: true,
    state: state,
    actions: actions,
    mutations: mutations
}

export default userStore