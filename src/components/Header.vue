<template>
  <div>
      <input
      v-on:keyup.13="handleItem"
      v-model="itemName" 
      type="text" 
      class="form-control todoListInput" 
      placeholder="请输入你的任务名称，按回车键确认" 
      aria-describedby="todoListInput">
  </div>
</template>

<script>
export default {
    name:"",
    data(){
        return{
            itemName:""
        }
    },
    props: {
        addItem:{
            type: Function,
            require: true
        }
    },
    methods:{
        handleItem(){
            if(this.itemName.trim()){
                this.addItem({id: Date.now(), content:this.itemName, isCompleted: false});
            }else{
                alert("请输入合法数据!");
            }
            this.itemName="";
        }
    }
}
</script>

<style>
    .todoListInput{
        margin-bottom: 10px;
        font-size: 20px;
    }
</style>