<template>
  <section id="main-header">
    <div class="language">
      <a href="https://bergenexpeditiegeneeskunde.be">Nederlands</a>
      <a href="https://mountainandexpeditionmedicine.be">English</a>
    </div>

    <div class="header-container">
      <div class="header">
        <img src="@/assets/images/mountain-and-expedition-medicine.png" />
        <nav>
          <router-link to="/">Dr Wim Hullaert</router-link>
          <router-link to="/for-who">{{ $t("header.forwho") }}</router-link>
          <router-link to="/contact">Contact</router-link>
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
  text-transform: uppercase;
}
.header a {
  font-family: "Maven Pro", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 22px;
  font-weight: 900;
  background-color: rgba(0, 0, 0, 0.3);
  white-space: nowrap;
  padding: 6px 6px;
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

  .header a {
    line-height: 7vh;
    margin-top: 2vh;
    font-size: 4vh;
  }

  .language {
    justify-content: center;
    gap: 4%;
  }
}
</style>
