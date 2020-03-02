<template>  
<div>
    <router-link to="/movie" @change="chan">电影</router-link>
    <router-view></router-view> 
</div> 
</template>
<script>
export default {
  methods: {
    chan() {
          this.$router.push({ path: "/movie"});
    }
  }
};
</script>