<template>
<header>
<!--  <img src="./src/assets/img/bg-alpine.jpg" alt="alpine bg"> -->
 <div class="menu">
   <DrWimHullaert text="Dr Wim Hullaert"/>
   <ForWho text="For Who"/>
   <ContactPage text="Contact"/>
 </div>
</header>




</template>





<script>
import DrWimHullaert from './DrWimHullaert.vue'
import ForWho from './ForWho.vue'
import ContactPage from './ContactPage.vue'


export default {
 
  name: 'PageHeader',
  components: { 
    DrWimHullaert,
    ForWho,
    ContactPage
   },
}
</script>






<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap');

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
header.menu{
  padding:20px;
  display:block;
  background-color: grey;
  font-size: 22px;
  font-weight: bold;
  font-family: 'Maven Pro Black','Lucida Sans Unicode','Lucida Grande',Verdana,sans-serif;
  text-decoration: none;
  text-transform: uppercase;
color:white;
}
</style>
