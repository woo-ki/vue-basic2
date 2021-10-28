<template>
    <div class="filter-item" :class="filter" :style="{backgroundImage: `url('${containerData.url}')`}">
        <!-- 단일데이터인 경우 -->
        <slot></slot>
        <!-- 다중데이터인 경우 -->
        <!-- <slot name="a"></slot> -->

        <!-- slot props 부모에게 데이터 보내는 법 -->
        <!-- <slot :tempMsg="tempMsg"></slot> -->
    </div>
</template>

<script>
export default {
    name: "FilterBox",
    props: {
        containerData: Object,
        filter: String
    },
    data() {
        return {
            tempMsg : 'slot props 테스트 데이터'
        }
    }
}
</script>

<style scoped>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    background-position : center;
}
</style>