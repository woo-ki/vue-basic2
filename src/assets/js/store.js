import {createStore} from "vuex";
import posts from "@/assets/js/insta/insta";

const store = createStore({
    state() {
        return {
            posts
        }
    },
    mutations: {
        changeName(state, param) {
            state.name = param;
        },
        increaseAge(state) {
            state.age += 1;
        },
        likeAction(state, idx) {
            const target = state.posts[idx];
            target.liked ? target.likes-- : target.likes++;
            target.liked = !target.liked;
        }
    }
});

export default store;