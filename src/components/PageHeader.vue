<template>
  <section id="main-header">
    <div class="language">
      <a href="#">Nederlands</a>
      <a href="#">English</a>
    </div>

    <div class="header-container">
      <div class="header">
        <img src="@/assets/images/mountain-and-expedition-medicine.png" />
        <nav>
          <router-link to="/">Dr WIM HULLAEERT</router-link>
          <router-link to="/for-who">FOR WHO</router-link>
          <router-link to="/contact">CONTACT</router-link>
        </nav>
      </div>
    </div>
  </section>
</template>

<script></script>

<style>
#main-header {
  display: flex;
  flex-direction: column;
  width: 880px;
  padding: 2% 0;
}

.language {
  display: flex;
  gap: 1%;
  justify-content: flex-end;
}

.language a {
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}

.header-container {
  display: flex;
  justify-content: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2% 0;
  width: 880px;
}
.header nav {
  display: flex;
  gap: 4%;
  justify-content: center;
  justify-content: flex-end;
}
.header a {
  font-family: "Maven Pro", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 22px;
  font-weight: 900;
  background-color: rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  padding: 5px 7px 2px;
}
</style>
