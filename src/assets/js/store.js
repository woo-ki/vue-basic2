import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20
        }
    },
    mutations: {
        changeName(state, param) {
            state.name = param;
        },
        increaseAge(state) {
            state.age += 1;
        }
    }
});

export default store;