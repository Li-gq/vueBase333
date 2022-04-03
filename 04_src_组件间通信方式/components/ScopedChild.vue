<template>
  <div>
      <h2>今天天气不错！</h2>
      <ul>
          <li v-for="todo in todos" :key="todo.id">
              <slot :todo="todo">
                {{todo.content}}
              </slot>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"",
    props: ["todos"]
}
</script>

<style>

</style>