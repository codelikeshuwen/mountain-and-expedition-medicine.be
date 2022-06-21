<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";

export default {
  name: "ForWhoPage",
  components: { PageHeader, PageFooter },
  data() {
    return {};
  },
};
</script>

<template>
  <div id="forwho" class="page">
    <PageHeader />
    <main>
      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>FOR</h5>
            <h1>MOUNTAINEERS & ROCK CLIMBERS</h1>
            <p>
              Altitude illness: what , prevention, treatment <br />
              oxygen: when, how much l/min <br />
              frostbite: prevention, managing <br />
              nutrition: what, quality of food , quantity : calories
            </p>
          </div>
          <img src="@/assets/images/mountaineers_0.jpg" alt="moutainners" />
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
  width: 244px;
  object-fit: contain;
  border: 2px, solid, white;
}
</style>
