<template>
  <div class="todo-list-fooetr col-12 clearfix">
      <label >
        <input 
        type="checkbox" 
        v-model="isAllChecked">
        <span> 已完成 {{this.CompletedNumber}} / 全部 {{todoItems.length}} </span> 
      </label>
      <button 
      class="btn btn-primary"
      @click="handleDeleteCompleted">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:"",
    props:{
        todoItems:Array,
        checkedAll:Function,
        deleteCompleted:Function
    },
    computed:{
        CompletedNumber(){
            return this.todoItems.reduce((prev,cur)=>{
                if(cur.isCompleted) {return prev+1;}
                else {return prev;}
            },0);
        },
        isAllChecked:{
            get(){
                if(this.todoItems.length!==0 && this.CompletedNumber === this.todoItems.length) return true;
                else return false;
            },
            set(isAllChecked){
                this.checkedAll(isAllChecked);
            }
        }
    },
    methods:{
        handleDeleteCompleted(){
            if(confirm("是否删除已完成的任务！")) this.deleteCompleted();
        }
    }

};
</script>

<style>
    .todo-list-fooetr{
        font-size: 20px;
        line-height: 36px;
        padding: 10px;
        padding-right: 0;
        padding-bottom: 0;
    }
    .todo-list-fooetr label{
        margin: 0;
    }
    .todo-list-fooetr input{
        width: 16px;
        height: 16px;
    }
    .todo-list-fooetr span{
        padding: 10px;
        user-select: none;
    }
    .todo-list-fooetr button{
        background-color: red !important;
        border:none;
        float:right;
        /* transform: translate(0,10px); */
    }
    button:hover{
        background-color: rgb(203, 2, 2) !important;
    }
    
</style>