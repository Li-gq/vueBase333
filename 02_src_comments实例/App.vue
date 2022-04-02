<template>
  <div>
      <Header></Header>
      <div class="row col-10 offset-1">
        <Add :addComment="addComment" class="col-4"/>
        <List :comments="comments" :deleteComment="deleteComment" class="col-8"/>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Add from '@/components/Add';
import List from '@/components/List';
export default {
    name:"",
    components:{
        Header,Add,List
    },

    data(){
      return{
        comments:[
          {id:1, content:"Vue厉害极了~~~Vue厉害极了~~~Vue厉害极了~~~Vue厉害极了~~~Vue厉害极了~~~Vue厉害极了~~~Vue厉害极了~~~Vue厉害极了~~~Vue厉害极了~~~Vue厉害极了~~~Vue厉害极了~~~Vue厉害极了~~~",userName:"qingmeng"},
          {id:2, content:"Vue真厉害~~~",userName:"zhaoliying"},
          {id:3, content:"Vue真厉害~~~",userName:"zhaoliying"}
        ]
      };
    },
    methods:{
      addComment(comment){
        this.comments.push(comment);
        console.log(this.comments);
      },
      deleteComment(index){
        this.comments.splice(index, 1);
      }
    }
};

</script>

<style scoped>

</style>


