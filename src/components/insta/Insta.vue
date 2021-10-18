<template>
    <div class="header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li>Next</li>
        </ul>
        <router-link to="/">
            <img src="@/assets/images/logo.png" class="logo"/>
        </router-link>
    </div>

    <Container :posts="posts" :containerData="containerData"/>
<!--    <button @click="more(moreCnt)">더보기</button>-->

    <div class="footer">
        <ul class="footer-button-plus">
            <input @change="upload" type="file" id="file" class="inputfile"/>
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>
</template>

<script>
import Container from "@/components/insta/Container";
import posts from "@/assets/js/insta/insta";

export default {
    name: "Insta",
    components: {Container},
    data() {
        return {
            posts,
            moreCnt: 0,
            containerData: {
                nowPage: 0,
                url: ''
            }
        }
    },
    methods: {
        more(cnt) {
            this.moreCnt++;
            this.axios
                .get(`https://codingapple1.github.io/vue/more${cnt}.json`)
                .then((data) => {
                    if(data.status == 200) {
                        this.posts.push(data.data);
                    } else {
                        console.log('fail');
                        this.moreCnt--;
                    }
                }).catch((err) => {
                    console.log(err);
                    this.moreCnt--;
                });
        },
        upload(e) {
            let file = e.target.files;
            let url = URL.createObjectURL(file[0])
            if(url != null && url != '') {
                this.containerData.url = url;
                this.containerData.nowPage++;
            }
        }
    }
}
</script>

<style scoped src="@/assets/css/insta/insta.css">
/*@import '../../assets/css/insta/insta';*/
</style>