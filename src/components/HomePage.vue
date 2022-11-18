<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";

export default {
  name: "HomePage",
  components: { PageHeader, PageFooter },
  data() {
    return {
      foo: process.env.VUE_APP_LOCALE,
    };
  },
};
</script>

<template>
  <div id="home" class="page">
    <PageHeader />
    <main>
      <div class="bg">
        <div id="home" class="container">
          <div class="textbox">
            <h1>{{ $t("home.h1") }}</h1>
            <h2>{{ $t("home.h2") }}</h2>
            <h2>{{ $t("home.p1") }}</h2>
            <ul class="expertise">
              <li>
                {{ $t("home.expertise1") }}
              </li>
              <li>
                {{ $t("home.expertise2") }}
              </li>
              <li>
                {{ $t("home.expertise3") }}
              </li>
              <li>
                {{ $t("home.expertise4") }}
              </li>
              <li>
                {{ $t("home.expertise5") }}
              </li>
              <li>
                {{ $t("home.expertise6") }}
              </li>
              <li>
                {{ $t("home.expertise7") }}
              </li>
              <li>
                {{ $t("home.expertise8") }}
              </li>
              <li>
                {{ $t("home.expertise9") }}
              </li>
            </ul>
          </div>
          <img
            src="@/assets/images/dokter-wim-hullaert-in-de-bergen.jpg"
            alt="doctor-img"
          />
        </div>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<style>
#home.page {
  background-image: url("@/assets/images/bg-alpine.jpg");
}

.page {
  background-attachment: fixed;
  background-position: top;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}

main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1vh;
}

.bg {
  background-color: rgba(0, 0, 0, 0.3);
  width: 850px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

.container {
  background-color: rgba(26, 26, 26, 0.85);
  width: 790px;
  height: auto;
  padding: 30px;
  display: flex;
}

#home.container {
  align-items: flex-start;
  gap: 4%;
}

.textbox h1 {
  font-family: "Maven Pro", sans-serif;
  font-weight: 900;
  font-size: 24px;
  margin: 0px;
}

h2 {
  font-family: "Maven Pro", sans-serif;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
}

.language a,
p,
li {
  font-family: "Maven Pro", sans-serif;
  font-size: 13px;
  line-height: 20px;
  columns: white;
}

.textbox {
  color: white;
}

#home img {
  max-width: 300px;
  object-fit: contain;
}

@media screen and (max-width: 800px) {
  .bg {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
  }

  .container {
    width: 100%;
    flex-direction: column-reverse;
  }

  .language a,
  p,
  li {
    line-height: 3vh;
    font-size: 16px;
  }

  #home img {
    width: 80%;
    padding: 20px;
  }
}
</style>
