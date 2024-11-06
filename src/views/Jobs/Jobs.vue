<template>
  <div>
    <h3>THIS IS JOBS PAGE</h3><br>

    <div v-for="job in jobs" :key="job.id" class="jobs">
        <router-link :to="{name:'jobdetail',params:{id:job.job}}">
            <h4 id="title">{{ job.title }}</h4>
        </router-link>
    </div>
 
  </div>
</template>

<script>
export default {
    data(){
        return {

            jobs: [
                {id:"1",job:"GM",title:"General Manager"},
                {id:"2",job:"PM",title:"Project Manager"},
                {id:"3",job:"SE",title:"Software Engineer"},
                {id:"4",job:"JSE",title:"Junior Engineer"},
                {id:"5",job:"QA",title:"Quality Accessor"},
            ]
        }
    }

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