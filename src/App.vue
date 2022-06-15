<template>
<h1> Welcome </h1>
  <PageHeader/>
</template>

<script>

import PageHeader from './components/PageHeader.vue'


 export default {
  name: 'App',
  components: {
    PageHeader
  }, 
  data () {
    return {

    }
  }
 }
</script>

<style>

#app {
  font-family: Verdana,Tahoma,"DejaVu Sans",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
