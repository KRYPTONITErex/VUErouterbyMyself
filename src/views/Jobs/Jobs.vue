<template>
  <div>
    <h3>THIS IS JOBS PAGE</h3><br>

    <div v-for="job in jobs" :key="job.id" class="jobs">
        <router-link :to="{name:'jobdetail',params:{id:job.id}}">
            <h4 id="title">{{ job.title }}</h4>
        </router-link>
    
    </div>

    
 
  </div>
</template>

<script>
export default {
    data(){
        return {
            // jobDetail: null,


            jobs: []
        }
    },
    mounted(){
       fetch('http://localhost:3000/jobs')
       .then(((response)=>{
            return response.json()
       }))
       .then((datas)=>{
            this.jobs=datas
       })
       .catch((err)=>{
        console.log(err.message());
       })
    },


}
</script>

<style>
.jobs{
    background-color: crimson;
    color: beige;
    margin: 20px;
    padding: 5px;
    border-radius: 15px;
    font-size: large;
}
#title{
    color: beige;
}

</style>