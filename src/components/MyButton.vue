<template>
    <div>
        <h2>{{msg}}</h2>
        <button @click="count++">点击次数{{count}}</button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            msg: "下雨了~",
            count: 0,
        }
    }
}
</script>

<style scoped>

</style>