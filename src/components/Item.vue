<template>
  <div 
  class="item col-12" 
  @mouseenter="isShow = true"
  @mouseleave="isShow = false"
  :class="{activeBackgroundColor:isShow}">
      <label>
        <input type="checkbox" v-model="isChecked"/>
        <span class="col-8">
            {{todoItem.content}}
        </span> 
      </label>
      <button 
      class="btn btn-primary" 
      v-show="isShow"
      @click="handleDeleteItem">删除</button>
  </div>
</template>



<script>
export default {
    name:"",
    data(){
        return{
            isShow: false
        }
    },
    props:["todoItem","index","changeState","deleteItem"],
    computed:{
        isChecked:{
            get(){
                return this.todoItem.isCompleted;
            },
            set(isChecked){
                this.changeState(this.index, isChecked);
            }
        }
    },
    methods:{
        handleDeleteItem(){
            if(confirm(`是否删除任务【${this.todoItem.content}】`)) this.deleteItem(this.index);
        }
    }
}
</script>

<style>
    .item{
        font-size: 25px;
        border: 1px solid gray;
        border-bottom: none;
        user-select:none;
        padding: 10px;
    }
    .activeBackgroundColor{
        background-color: rgb(223, 222, 222);
    }
    .item:first-of-type{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    .item:last-of-type{
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        border-bottom: 1px solid gray;
    }
    .item span{
        padding: 10px;
        /* display: inline-block; */
        /* word-wrap: break-word; */
    }
    .item label{
        margin: 0;
        line-height: 25px;
    }
    .item input{
        width: 16px;
        height: 16px;
        vertical-align: top;
        position: relative;
        top: 6px;  
    }
    .item button{
        float: right;
        background-color: red !important;
        border:none;
        float:right;
    }
    button:hover{
        background-color: rgb(203, 2, 2) !important;
    }
</style>