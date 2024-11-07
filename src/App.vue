<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |

    <router-link :to="{name:'job'}">JOBS</router-link> |
    <router-link :to="{name:'jobdetail',params:{id:'id'}}">JOB Details</router-link>


  </nav>

  <router-view/>

  <button @click="reDirect">back to HOME</button>

  <button @click="goNext">GO FORWARD</button>

  <button @click="goBack">GO BACKWARD</button>

</template>

<script>

  export default{
    methods: {
      goBack(){
        this.$router.go(-1);
      },
      goNext(){
        this.$router.go(+1);
      },
      reDirect(){
        this.$router.push({name:'home'})
      }
    }

  }

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin: 50px;
  padding: 0px;
  border: #2c3e50 1px solid;
  border-radius: 15px;
  width: 500px;
  align-content: center;
  align-items: center;
  display: inline-block;
  background-color:rgb(255, 246, 232)
}

nav a {
  font-weight: bold;
  font-size: large;
  color: #2c3e50;
  border-radius: 5px;
  padding: 15px;
  margin: 5px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #ffefd2;
  font-style: italic;
  background-color: rgba(253, 18, 65, 0.953);
  padding: 5px 10px 5px;
  margin: 5px;
  text-decoration: none;
}

button{
    margin: 10px 20px;
    padding: 7px 10px;
    color: whitesmoke;
    background-color: crimson;
    border-radius: 7px;
    border: 1px solid grey;
}
button:hover{
    background-color: bisque;
    color: brown;
}

</style>
