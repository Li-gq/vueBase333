<template>
  <div class="todo-list-list">
      <Item 
      v-for="(todoItem, index) in todoItems" 
      :todoItem="todoItem" 
      :index="index" 
      :key="todoItem.id"
      :changeState="changeState"
      :deleteItem="deleteItem"/>
  </div>
</template>

<script>
import Item from '@/components/Item.vue';
export default {
    name:"",
    components:{
        Item
    },
    props:["todoItems","changeState","deleteItem"]
}
</script>

<style>
    
</style>