<template>
    <div class="col-10 offset-1 main row">
        <h2 v-if="isFirst">Welcome to here.</h2>
        <h2 v-else-if="isLoading">Loading...</h2>
        <h2 v-else-if="errorMsg" style="color:red">请求失败！---{{errorMsg}}</h2>
        <div v-else class="col-xm-1 col-md-6 col-lg-4 card-wrap" 
        v-for="{id,avatar_url, html_url, login} in users" :key="id">
            <div class="card">
                <img :src="avatar_url" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{login}}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a :href="html_url" class="btn btn-primary" target="_blank">GitHub个人主页</a>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name:"",
    data(){
        return{
            isFirst: true,
            isLoading: false,
            errorMsg: "",
            users: []
        }
    },
    mounted(){
        this.$bus.$on("searchAjax", this.searchAjax);
    },
    methods:{
        searchAjax(q){
            this.isFirst = false;
            this.isLoading = true;
            axios({
                url:"https://api.github.com/search/users",
                method: "get",
                params:{
                    q
                }
            }).then(response=>{
                this.isLoading = false;
                this.users = response.data.items.map(item =>{
                    let {id, avatar_url, html_url, login} = item;
                    return ({id, avatar_url, html_url, login});
                })
            }).catch(error=>{
                this.isLoading=false;
                this.errorMsg = error.message;
            });
        }
    }
}
</script>

<style>
    .main{
        padding: 0;
    }
    .card-wrap{
        margin-bottom: 10px;
    }
    .card-wrap+.card-wrap{
        padding-right: 10px;
    }
    
</style>