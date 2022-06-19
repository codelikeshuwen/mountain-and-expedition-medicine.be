<template>
  <div class="language">
    <a href="#">English</a>
    <a href="#">Nederlands</a>
  </div>

  <div class="bar">
    <img src="@/assets/images/mountain-and-expedition-medicine.png" />
    <nav>
      <router-link to="/">DR WIM HULLAEERT</router-link>
      <router-link to="/for-who">FOR WHO</router-link>
      <router-link to="/contact">CONTACT</router-link>
    </nav>
  </div>
</template>

<script></script>

<style>
.language {
  display: flex;
  gap: 1%;
}

.language a {
  color: red;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
