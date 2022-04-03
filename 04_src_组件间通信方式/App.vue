<template>
  <div>
    <h4>A组件向B组件传递数据的方式：全局数据总线</h4>
    <A/>
    <B/>
    <h4>C组件向D组件传递数据的方式：消息订阅和发布</h4>
    <C/>
    <D/>
    <h4>传递数据的方式：插槽(默认插槽，默认插槽只能有一个)</h4>
    <Child>
      <template>
        <button>点我</button>
      </template>
      <template>
        <button>点我</button>
      </template>
    </Child>
    <Child>
      <template>
        <p>hello~</p>
      </template>
    </Child>
    <h4>传递数据的方式：插槽(具名插槽，具名插槽可以有多个)</h4>
    <Child1>
      <template slot="xxx">
        <a href="https://www.baidu.com">百度</a>
      </template>
      <template>
        <p>有点困！</p>
      </template>
      <template>
        <p>有点困！</p>
      </template>
    </Child1>
    <Child1>
      <template slot="xxx">
        <a href="https://www.baidu.com">百度1</a><br/>
      </template>
      <template slot="yyy">
        <!-- 这里覆盖原来的内容 -->
        <a href="https://www.baidu.com">百度1</a>
      </template>
      <template>
        <p>有点累！</p>
      </template>
      <template>
        <p>有点累！</p>
      </template>
    </Child1>
    <p>无论是默认插槽还是具名插槽，里面都可以写东西，也可以不写东西。
      如果写了东西，就看你用的时候有没有给slot传递新东西，如果传递了，slot当中写的东西就被覆盖了；
      如果没有给slot传递新的东西，那么默认显示的就是slot当中的东西。
    </p>
    <h4>传递数据的方式：插槽(作用域插槽)</h4>
    <ScopedChild :todos="todos">
      <!-- {todo}将数据结构出来 -->
      <!-- <template slot-scope="scopeProps">
        <span v-if="scopeProps.todo.isCompleted" style="color:hotpink">
          √{{scopeProps.todo.content}}
        </span>
      </template> -->
      <template slot-scope="{todo}">
        <span v-if="todo.isCompleted" style="color:hotpink">
          √{{todo.content}}
        </span>
      </template>
    </ScopedChild>
  </div>
</template>

<script>
import A from '@/components/A.vue';
import B from '@/components/B.vue';
import C from '@/components/C.vue';
import D from '@/components/D.vue';
import Child from '@/components/Child.vue';
import Child1 from '@/components/Child1.vue';
import ScopedChild from '@/components/ScopedChild.vue';

export default {
    name: "",
    components:{
      A,B,C,D,Child,Child1,ScopedChild
    },
    data(){
      return{
        todos:[
          {id:1, content:"抽烟", isCompleted:false},
          {id:2, content:"喝酒", isCompleted:true},
          {id:3, content:"烫头", isCompleted:false},
        ]
      };
    }
}
</script>

<style>

</style>