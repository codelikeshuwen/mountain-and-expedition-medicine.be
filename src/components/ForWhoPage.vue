<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";

export default {
  name: "ForWhoPage",
  components: { PageHeader, PageFooter },
  data() {
    return {
      foo: process.env.VUE_APP_LOCALE,
    };
  },
};
</script>

<template>
  <div id="forwho" class="page">
    <PageHeader />
    <main id="forwho">
      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>{{ $t("forwho.h5") }}</h5>
            <h1>{{ $t("forwho.who1") }}</h1>
            <hr />
            <p>{{ $t("forwho.description1") }}</p>
          </div>
          <img
            src="@/assets/images/mountaineers_0.jpg"
            alt="moutainners"
            width="240"
            height="160"
          />
        </div>
      </div>
      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>{{ $t("forwho.h5") }}</h5>
            <h1>{{ $t("forwho.who2") }}</h1>
            <hr />
            <p>{{ $t("forwho.description2") }}</p>
          </div>
          <div class="img">
            <img
              src="@/assets/images/desert-bikers_0.jpg"
              alt="desert-bikers"
              width="240"
              height="144"
            />
          </div>
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>{{ $t("forwho.h5expedities") }}</h5>
            <h1>{{ $t("forwho.who3") }}</h1>
            <hr />
            <p>{{ $t("forwho.description3") }}</p>
          </div>
          <div class="img">
            <img
              src="@/assets/images/desert_0.jpg"
              alt="desert"
              width="240"
              height="146"
            />
          </div>
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>{{ $t("forwho.h5expedities") }}</h5>
            <h1>{{ $t("forwho.who4") }}</h1>
            <hr />
            <p>{{ $t("forwho.description4") }}</p>
          </div>
          <div class="img">
            <img
              src="@/assets/images/jungle_0.jpg"
              alt="jungle"
              width="240"
              height="156"
            />
          </div>
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>{{ $t("forwho.h5") }}</h5>
            <h1>{{ $t("forwho.who5") }}</h1>
            <hr />
            <p>{{ $t("forwho.description5") }}</p>
          </div>
          <div class="img">
            <img
              src="@/assets/images/pole-expedition-member.jpg"
              alt="pole-expedition-member"
              width="240"
              height="160"
            />
          </div>
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>{{ $t("forwho.h5") }}</h5>
            <h1>{{ $t("forwho.who6") }}</h1>
            <hr />
            <p>{{ $t("forwho.description6") }}</p>
          </div>
          <div class="img">
            <img
              src="@/assets/images/diver_0.jpg"
              alt="diver"
              width="240"
              height="142"
            />
          </div>
        </div>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<style>
#forwho.page {
  background-image: url("@/assets/images/bg-fields.jpg");
}

main #forwho {
  display: flex;
  white-space: pre-line;
}

#forwho.container {
  width: 760px;
  justify-content: space-between;
}

h5 {
  font-family: "Maven Pro", sans-serif;
  font-weight: 900;
  font-size: 13px;
  line-height: 24px;
  margin: 0%;
}

#forwho.container img {
  width: 240px;
  object-fit: contain;
  border: 2px solid white;
}

@media screen and (max-width: 800px) {
  #forwho.container {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
