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
          <router-link to="/">Dr WIM HULLAERT</router-link>
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
  padding: 2%;
  width: 865px;
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

@media screen and (max-width: 800px) {
  #main-header {
    width: 100%;
  }

  .header nav {
    flex-direction: column;
    gap: 4%;
    justify-content: center;
  }

  .header {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .header img {
    width: 80%;
    padding: 20px;
    max-width: 300px;
  }
}
</style>
