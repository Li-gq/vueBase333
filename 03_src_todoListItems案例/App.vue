<template>
  <div class="container">
      <div class="todoList col-10 offset-1">
        <Header :addItem="addItem"/>
        <List 
        :todoItems="todoItems" 
        :changeState="changeState" 
        :deleteItem="deleteItem"/>
        <Footer 
        :todoItems="todoItems"
        :checkedAll="checkedAll"
        :deleteCompleted="deleteCompleted"/>
      </div>
  </div>
</template>
// todoList案例
<script>
import Header from '@/components/Header.vue';
import List from '@/components/List.vue';
import Footer from '@/components/Footer.vue';
export default {
    name:"",
    data(){
      return{
        todoItems:JSON.parse(localStorage.getItem("TODOITEMS_KEY")) || []
      };
    },
    watch:{
      todoItems:{
        deep:true, // 深度监视
        // 一般监视和深度监视
        // 一般监视监视的数组的数据，但是数组内部对象的数据监视不到
        // 深度监视可以监视到数组本身的数据，也可以监视到数组内部对象的数据
        handler(newVal, oldVal){
          // localStorage.clear()
          // 只要数据变化，变化后的数据存储到localStorage中
          // localStorage是前端本地存储的方案，是一个小型的数据库，存储到localStorage中的数据会自动转化为字符串
          localStorage.setItem("TODOITEMS_KEY", JSON.stringify(newVal));// 不能直接存对象数据类型，因为对象数据转基本数据了
        }
      }
    },
    components:{
      Header,List,Footer
    },
    methods:{
      addItem(obj){
        this.todoItems.unshift(obj);
      },
      changeState(index, isCompleted){
        this.todoItems[index].isCompleted=isCompleted;
      },
      deleteItem(index){
        this.todoItems.splice(index,1);
      },
      checkedAll(isAllChecked){
        this.todoItems.forEach(item=>{item.isCompleted=isAllChecked});
      },
      deleteCompleted(){
        this.todoItems = this.todoItems.filter(item=>!item.isCompleted);
      }
      
    }
};

// 对象数据类型转化为基本数据类型：计算，比较，判等的时候（判等都是对象则判地址，如果有一个不是对象则转基本类型）
// 数组转基本：数组去掉中括号，中间留逗号。 [1,2,3]-->"1,2,3"
// 对象转基本：固定的'[Object, Object]'
// 函数转基本：固定的 函数整体加字符串
</script>

<style scoped>
  .todoList{
    border: 1px solid gray;
    margin: 10px auto;
    border-radius: 5px;
    padding: 15px;
  }
  button:hover{
    background-color: rgb(203, 2, 2) !important;
  }
  /* button:active{
    border: none !important;
    box-shadow: none !important;
  } */
</style>