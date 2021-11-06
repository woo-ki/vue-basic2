<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input @input="searchInput($event.target.value)" placeholder="🔍"/>
        <div class="post-header" v-for="(follower, i) in obj.followers" :key="i">
            <div class="profile" :style="{backgroundImage: `url(${follower.image})`}"></div>
            <span class="profile-name">{{ follower.name }}</span>
        </div>
    </div>
</template>

<script>
import {onMounted, reactive} from "vue";
import axios from "axios";
// import {useStore} from 'vuex'

export default {
    name: "MyPage",
    props: {
        one: Number
    },
    // setup(props) {
    setup() {
        // let test = ref('asasas');
        let origin = reactive({});
        let obj = reactive({});

        // let {one} = toRefs(props);
        // console.log(one);
        //
        // watch(one, () => {
        //     console.log(one);
        // })
        //
        // let store = useStore();
        // console.log(store.state.posts);
        onMounted(() => {
            axios.get('/follower.json')
                .then(data => {
                    origin.followers = data.data;
                    obj.followers = {...origin.followers};
                    // let result = computed(() => {
                    //     return obj.followers.length;
                    // })
                    // console.log(result.value);
                });
        });

        function searchInput(value) {
            obj.followers = origin.followers.filter(x => {
                return x.name.includes(value);
            });
        }

        return {obj, searchInput};
    }
}
</script>

<style scoped>
.profile {
    background-image: url("https://placeimg.com/100/100/arch");
    width: 30px;
    height: 30px;
    background-size: 100%;
    border-radius: 50%;
    float: left;
}

.profile-name {
    display: block;
    float: left;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 14px;
}

.post-header {
    display: flex;
    padding: 10px;
}
</style>