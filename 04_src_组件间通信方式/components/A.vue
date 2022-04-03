<template>
  <div>
      <input type="text" v-model="msg" @keyup.enter="emitMsg">
  </div>
</template>

<script>
export default {
    name:'',
    data(){
        return{
            msg: ''
        }
    },
    methods:{
        emitMsg(){
            if(this.msg.trim()){
                this.$bus.$emit("setMsg", this.msg);
                this.msg="";
            }else{
                alert("请输入合法数据！");
            }
        }
    }
}
</script>

<style>

</style>