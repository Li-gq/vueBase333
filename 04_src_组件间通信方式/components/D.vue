<template>
  <div>
      <p>接收到数据：{{msg}}</p>
  </div>
</template>

<script>
import PubSub from 'pubsub-js';
export default {
    name:'',
    data(){
        return {
            msg: ""
        };
    },
    methods:{
        // msg是消息订阅和发布传递过来的消息名称，即使不用也要占位
        getMsg(msg, val){
            this.msg = val;
        }
    },
    mounted(){
        let token = PubSub.subscribe("sent msg", this.getMsg);
    },
    beforeDestroy(){
        PubSub.unsubscribe();
    }
}
</script>

<style>

</style>