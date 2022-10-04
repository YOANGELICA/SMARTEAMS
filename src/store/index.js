import {createStore} from 'vuex';
import counterStore from './counter';
import userStore from './user';

export default createStore({
    mudoles: {
        user: userStore,
        counter: counterStore
    }
})