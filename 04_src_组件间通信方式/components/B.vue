<template>
  <div>
      <p>接收到数据：{{msg}}</p>
  </div>
</template>

<script>
export default {
    name:'',
    mounted(){
        this.$bus.$on("setMsg",this.setMsg)
    },
    data(){
        return {
            msg: ""
        };
    },
    methods:{
        setMsg(val){
            this.msg = val;
        }
    }
}
</script>

<style>

</style>