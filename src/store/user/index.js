import state from './state';
import * as mutations from '.?mutations';
import * as actions from './actions';
import * as getters from './getters';

const userStore= {
    namespaced: true,
    state: state,
    actions: actions,
    mutations: mutations,
    getters: getters
}

export default userStore;