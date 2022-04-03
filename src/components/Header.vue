<template>
  <div class="col-10  offset-1 header">
      <h2>搜索GitHub用户</h2>
      <input type="text" placeholder="请输入用户名字" class="form-control col-4" 
      v-model="userName">
      <button class="btn btn-primary" @click="search">搜索</button>
  </div>
</template>

<script>
export default {
    name:"",
    data(){
        return{
            userName:""
        };
    },
    methods:{
        search(){
            let {userName} = this;
            if (userName.trim()){
                this.$bus.$emit('searchAjax', userName);
            }else{
                alert("请输入合法字段！")
            }
            this.userName = '';
        }
    }
}
</script>

<style scoped>
    .header{
        color: white;
        background-color: rgb(176, 176, 176);
        padding: 50px;
        margin-bottom: 10px;
    }
    .header input{
        display: inline-block;
        vertical-align: bottom;
        margin-right: 10px;
    }
</style>