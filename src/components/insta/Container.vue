<template>
    <div id="container">
        <div v-if="containerData.nowPage == 0">
            <Post v-for="(post, i) in $store.state.posts" :key="i" :post="post" :idx="i"/>
        </div>

        <!-- 필터선택페이지 -->
        <div v-else-if="containerData.nowPage == 1">
            <div class="upload-image" :class="containerData.filter" :style="{backgroundImage: `url('${containerData.url}')`}"></div>
            <div class="filters">
                <FilterBox v-for="(filter, i) in filters" :key="i" :filter="filter" :containerData="containerData">
                    <!-- 단일데이터인 경우 -->
                    {{ filter }}
                    <!-- 다중데이터인 경우 -->
                    <!-- <template v-slot:a>
                        <span>{{ filter }}</span>
                    </template> -->

                    <!-- 자식에서 데이터 받는법 -->
                    <!-- <template v-slot:default="tempMsg">{{ tempMsg }}</template> -->
                </FilterBox>
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-else-if="containerData.nowPage == 2">
            <div class="upload-image" :class="containerData.filter" :style="{backgroundImage: `url('${containerData.url}')`}"></div>
            <div class="write">
                <textarea class="write-box" placeholder="write!" @input="$emit('writeContent', $event.target.value)"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import Post from "@/components/insta/Post";
import FilterBox from "@/components/insta/FilterBox";

export default {
    name: "Container",
    components: {
        Post,
        FilterBox
    },
    props: {
        posts: Array,
        containerData: Object
    },
    data() {
        return {
            filters: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
        }
    }
}
</script>

<style scoped>
.upload-image{
    width: 100%;
    height: 450px;
    background: cornflowerblue;
    background-size : cover;
}
.filters{
    overflow-x:scroll;
    white-space: nowrap;
}
.filter-1 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
}
.filters::-webkit-scrollbar {
    height: 5px;
}
.filters::-webkit-scrollbar-track {
    background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
    background: #555;
}
.write-box {
    border: none;
    width: 90%;
    height: 100px;
    padding: 15px;
    margin: auto;
    display: block;
    outline: none;
}
</style>