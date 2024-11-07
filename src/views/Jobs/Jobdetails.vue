<template>
  <h2>This is JOB details page : <br> {{ id }}</h2>
<div v-if="job">
  <h1>JOB TITLE - {{ job.title }}</h1>
  <p>Job Detail - {{ job.detail }}</p>
</div>
  

  <h3>are you seeing the fucking details??</h3>
</template>

<script>
export default {
  data(){
    return{
      job:null
    }
    //   id:this.$route.params.id
    // }
  },
  props: ['id'],
  mounted(){
       fetch('http://localhost:3000/jobs/'+this.id)
       .then(((response)=>{
            return response.json()
       }))
       .then((data)=>{
            this.job=data
       })
       .catch((err)=>{
        console.log(err.message());
       })
    }
  
}
</script>

<style>

</style>