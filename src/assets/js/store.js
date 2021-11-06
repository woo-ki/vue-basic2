import {createStore} from "vuex";
import posts from "@/assets/js/insta/insta";
import axios from "axios";

const store = createStore({
    state() {
        return {
            moreCnt: 0,
            posts
        }
    },
    mutations: {
        likeAction(state, idx) {
            const target = state.posts[idx];
            target.liked ? target.likes-- : target.likes++;
            target.liked = !target.liked;
        },
        setMorePost(state, post) {
            state.posts.push(post);
        },
        increaseMoreCnt(state) {
            state.moreCnt++
        },
        decreaseMoreCnt(state) {
            state.moreCnt--
        },
        addNewPost(state, obj) {
            state.posts.unshift(obj);
        }
    },
    actions: {
        getMorePost(context, moreCnt) {
            axios.get(`https://codingapple1.github.io/vue/more${moreCnt}.json`)
                .then((data) => {
                    if(data.status == 200) {
                        context.commit('setMorePost', data.data);
                    } else {
                        console.log('fail');
                        context.commit('decreaseMoreCnt');
                    }
                }).catch((err) => {
                    console.log(err)
                    context.commit('decreaseMoreCnt');
                });
            context.commit('increaseMoreCnt');
        }
    }
});

export default store;