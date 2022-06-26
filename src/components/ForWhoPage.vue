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
    <main id="forwho">
      <div id="forwho" class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>FOR</h5>
            <h1>MOUNTAINEERS & ROCK CLIMBERS</h1>
            <hr />
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

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>FOR</h5>
            <h1>ATHLETES</h1>
            <hr />
            <p>
              Marathon des sables, Iron man, mountainbike trekkings
              <br />
              endurance performance
              <br />
              nutrition : energy- and fluid balance
              <br />
              acclimatisation.
            </p>
          </div>
          <img src="@/assets/images/desert-bikers_0.jpg" alt="desert-bikers" />
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>FOR</h5>
            <h1>DESERT EXPEDITIONS</h1>
            <hr />
            <p>
              acclimatisation
              <br />
              heat related illness: what, prevention, treatment
              <br />
              clothing , fluid intake
              <br />
              scorpione- and snakebites : envenomation : prevention , treatment
            </p>
          </div>
          <img src="@/assets/images/desert_0.jpg" alt="desert" />
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>FOR</h5>
            <h1>JUNGLE EXPEDITIONS</h1>
            <hr />
            <p>
              The hazards and challenges of humid tropical environments
              <br />
              tropical diseases: malaria, dengue
              <br />
              insect bites , leeches
              <br />
              skin diseases and woudinfection: prevention, management clothing.
            </p>
          </div>
          <img src="@/assets/images/jungle_0.jpg" alt="jungle" />
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>FOR</h5>
            <h1>POLE EXPEDITIONS</h1>
            <hr />
            <p>
              For any one challenging the Arctic North (Siberia, Alaska, Canada,
              North Pole) or the Antartic South (Antartica).
              <br />
              Hypothermia: prevention, managing

              <br />
              Deshydratation: what , prevention
            </p>
          </div>
          <img
            src="@/assets/images/pole-expedition-member.jpg"
            alt="pole-expedition-member"
          />
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5>FOR</h5>
            <h1>CAVE & DEEP-SEA DIVERS</h1>
            <hr />
            <p>
              The risks and challenges of deep-see diving (decompression,
              preparations,, how to deal with sharks and other see creatures,
              coral cuts)
              <br />
              The bends, barotrauma : prevention, managing
              <br />
              Dive tables
            </p>
          </div>
          <img src="@/assets/images/diver_0.jpg" alt="diver" />
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
}

#forwho.bg {
  display: flex;
  flex-direction: column;
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
  border: 2px solid white;
}
</style>
