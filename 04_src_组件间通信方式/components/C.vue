<template>
  <div>
      <input type="text" v-model="msg" @keyup.enter="emitMsg">
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
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
                PubSub.publish("sent msg", this.msg);
            }else{
                alert("请输入合法数据！");
            }
            this.msg="";
        }
    },
    
}
</script>

<style>

</style>