<template>
  <div class="list">
        <h2>评论回复：</h2>
        <Item 
        v-for="(comment, index) in comments" 
        :key="comment.id" 
        :comment="comment" 
        :deleteComment="deleteComment"
        :index="index"
        ></Item>
  </div>
</template>

<script>
import Item from './Item';
export default {
    name:"",
    components:{
        Item
    },
    props: ["comments","deleteComment"]  // 声明接收属性
}
</script>

<style scoped>
    .list{
        margin-bottom: 10px;
    }
</style>