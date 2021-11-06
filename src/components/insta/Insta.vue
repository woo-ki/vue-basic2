<template>
    <div class="header">
        <ul class="header-button-left">
            <li @click="clearWrite()" v-if="containerData.nowPage >= 1">Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li v-if="containerData.nowPage === 1" @click="containerData.nowPage++">Next</li>
            <li v-if="containerData.nowPage === 2" @click="submit()">Submit</li>
        </ul>
        <router-link to="/">
            <img src="@/assets/images/logo.png" class="logo"/>
        </router-link>
    </div>

    <Container @writeContent="newPostContent = $event" :containerData="containerData"/>
    <button v-if="containerData.nowPage === 0" @click="this.$store.dispatch('getMorePost', moreCnt)">더보기</button>

    <div v-if="containerData.nowPage === 0" class="footer">
        <ul class="footer-button-plus">
            <input @change="upload" type="file" id="file" class="inputfile"/>
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>

</template>

<script>
import Container from "@/components/insta/Container";
import {mapMutations, mapState} from 'vuex';

export default {
    name: "Insta",
    components: {
        Container
    },
    data() {
        return {
            containerData: {
                nowPage: 3,
                url: '',
                filter: ''
            },
            newPostContent: ''
        }
    },
    computed: {
        // posts() {
        //     return this.$store.state.posts
        // }
        // ...mapState(['moreCnt', 'posts'])
        ...mapState({moreCnt: 'moreCnt', posts: 'posts'})
    },
    methods: {
        ...mapMutations(['addNewPost']),
        upload(e) {
            if(this.containerData.nowPage > 1) {
                return;
            }

            let file = e.target.files;
            let url = URL.createObjectURL(file[0])
            if(url != null && url != '') {
                this.containerData.url = url;
                this.containerData.nowPage++;
            }
        },
        submit() {
            const newPost = {
                name: 'Wooki',
                userImage: 'https://placeimg.com/100/100/arch',
                postImage: this.containerData.url,
                likes: 0,
                date: 'November 02',
                liked: false,
                content: this.newPostContent,
                filter: this.containerData.filter
            };
            this.addNewPost(newPost);
            this.clearWrite();
        },
        clearWrite() {
            this.containerData.nowPage = 0;
            this.containerData.url = '';
            this.containerData.filter = '';
        }
    },
    mounted() {
        // 에미터 이벤트 받는법 마운티드에 하는게 관습적
        // this.emitter.on('이벤트명', () => {'실행문'});
        this.emitter.on('sendFilterName', (v) => {
            this.containerData.filter = v;
        })
    }
}
</script>

<style scoped src="@/assets/css/insta/insta.css">
/*@import '../../assets/css/insta/insta';*/
</style>
<style src="@/assets/css/insta/cssgram.min.css"></style>