<template>
  <div class="item container">
    <span>{{comment.userName}}说：</span> 
    <button class="btn btn-primary" @click="handleDelete">删除</button>
    <p class="col-11 offset-1">{{comment.content}}</p>
  </div>
</template>

<script>
export default {
    name:"", 
    props: ["comment","index","deleteComment"],
    methods:{
      handleDelete(){
        if(confirm("确定要删除吗？")){
          this.deleteComment(this.index);
        }
      }
    }
}
</script>

<style scoped>
  .item{
    width: 100%;
    border: 1px solid gray;
    margin-bottom: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .item span{
    font-size: 20px;
    font-weight: bold;
  }
  .item p{
    margin: 10px 0;
  }
  .item button{
    float: right;
  }
</style>