<template>
  <div class="add">
    <h3>用户名</h3>
    <input type="text" placeholder="用户名" v-model="userName">
    <h3>评论内容</h3>
    <textarea cols="30" rows="10" placeholder="评论内容" v-model="content"></textarea>
    <button class="btn btn-primary" type="button" @click="handleComment">提交</button>
  </div>
</template>

<script>
export default {
    name:"",
    data(){
      return{
        userName:"",
        content:""
      }
    },
    props:["addComment"],
    methods:{
      handleComment(){
        let {userName, content} = this;
        if(userName.trim() && content.trim()){
          let id = Date.now();
          let commentObj = {
            id,
            userName,
            content
          };
          // commentObj添加到父组件的comments数据中
          // 数据在哪里，操作数据的方法就要定义在哪里，哪里需要操作数据，我们是把操作数据的方法传递过来，让其调用
          // 这里将App中操作添加评论的方法addComment传递给Add这个组件去调用添加评论
          this.addComment(commentObj);
          // 清空数据
          this.content = "";
        }else{
          alert("请输入合法的用户名和内容！");
        }
      }
    }
};
</script>

<style scoped>
    .add{
        /* background-color: aqua; */
        padding: 0;
    }
    .add input{
      margin-bottom: 20px;
    }
    .add input, textarea{
        width: 100%;
        padding: 10px;
    }
    .add .btn{
      float:right;
    }
</style>