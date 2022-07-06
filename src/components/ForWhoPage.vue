<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";

export default {
  name: "ForWhoPage",
  components: { PageHeader, PageFooter },
  data() {
    return {
      language: "nl",
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
            <h5 v-if="language === 'en'">FOR</h5>
            <h5 v-if="language === 'nl'">VOOR</h5>
            <h1 v-if="language === 'en'">MOUNTAINEERS & ROCK CLIMBERS</h1>
            <h1 v-if="language === 'nl'">BERGBEKLIMMERS</h1>

            <hr />
            <p v-if="language === 'en'">
              Altitude illness: what , prevention, treatment <br />
              oxygen: when, how much l/min <br />
              frostbite: prevention, managing <br />
              nutrition: what, quality of food , quantity : calories
            </p>
            <p v-if="language === 'nl'">
              hoogteziekte: wat , hoe voorkomen, behandeling
              <br />
              zuurstof: wanneer , hoeveel?
              <br />
              vriesletsels (frostbite) : hoe voorkomen
              <br />
              voeding : wat, hoeveel calorieen per dag
            </p>
          </div>
          <img src="@/assets/images/mountaineers_0.jpg" alt="moutainners" />
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5 v-if="language === 'en'">FOR</h5>
            <h5 v-if="language === 'nl'">VOOR</h5>
            <h1 v-if="language === 'en'">ATHLETES</h1>
            <h1 v-if="language === 'nl'">ATLETEN</h1>

            <hr />
            <p v-if="language === 'en'">
              Marathon des sables, Iron man, mountainbike trekkings
              <br />
              endurance performance
              <br />
              nutrition : energy- and fluid balance
              <br />
              acclimatisation.
            </p>
            <p v-if="language === 'nl'">
              Marathon des sables, Iron Man, ultraloop, mountainbike tochten
              <br />
              Training
              <br />
              voeding : energie-en vochtbalans
              <br />
              acclimatisatie
            </p>
          </div>
          <img src="@/assets/images/desert-bikers_0.jpg" alt="desert-bikers" />
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5 v-if="language === 'en'">FOR</h5>
            <h5 v-if="language === 'nl'">VOOR</h5>
            <h1 v-if="language === 'en'">DESERT EXPEDITIONS</h1>
            <h1 v-if="language === 'nl'">WOESTIJNEN & OUTBACKS</h1>
            <hr />
            <p v-if="language === 'en'">
              acclimatisation
              <br />
              heat related illness: what, prevention, treatment
              <br />
              clothing , fluid intake
              <br />
              scorpione- and snakebites : envenomation : prevention , treatment
            </p>
            <p v-if="language === 'nl'">
              acclimatisatie
              <br />
              hitte gerelateerde ziekten : wat , preventie , behandeling
              <br />
              kledij <br />
              schorpioen- en slangenbeten : wat doen , hoe voorkomen
            </p>
          </div>
          <img src="@/assets/images/desert_0.jpg" alt="desert" />
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5 v-if="language === 'en'">FOR</h5>
            <h5 v-if="language === 'nl'">VOOR</h5>
            <h1 v-if="language === 'en'">JUNGLE EXPEDITIONS</h1>
            <h1 v-if="language === 'nl'">OERWOUDEN / JUNGLES</h1>

            <hr />
            <p v-if="language === 'en'">
              The hazards and challenges of humid tropical environments
              <br />
              tropical diseases: malaria, dengue
              <br />
              insect bites , leeches
              <br />
              skin diseases and woudinfection: prevention, management clothing.
            </p>
            <p v-if="language === 'nl'">
              tropische ziekten : malaria , dengue .....
              <br />
              insectenbeten <br />
              huidziekten door de hoge vochtigheidsgraad
              <br />
              typische kledij.
            </p>
          </div>
          <img src="@/assets/images/jungle_0.jpg" alt="jungle" />
        </div>
      </div>

      <div class="bg">
        <div id="forwho" class="container">
          <div class="textbox">
            <h5 v-if="language === 'en'">FOR</h5>
            <h5 v-if="language === 'nl'">VOOR</h5>
            <h1 v-if="language === 'en'">POLE EXPEDITIONS</h1>
            <h1 v-if="language === 'nl'">POOLREIZIGERS</h1>

            <hr />
            <p v-if="language === 'en'">
              For any one challenging the Arctic North (Siberia, Alaska, Canada,
              North Pole) or the Antartic South (Antartica).
              <br />
              Hypothermia: prevention, managing

              <br />
              Deshydratation: what , prevention
            </p>
            <p v-if="language === 'nl'">
              Voor iedereen die zich waagt aan het Arctische Noorden (Siberië,
              Alaska, Canada, de Noordpool, ...) of het Antarctisch Zuiden

              <br />
              Vriesletsels

              <br />
              Deshydratatie : wat , preventie; Hypothermie(onderkoeling) :
              kledij ...
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
            <h5 v-if="language === 'en'">FOR</h5>
            <h5 v-if="language === 'nl'">VOOR</h5>
            <h1 v-if="language === 'en'">CAVE & DEEP-SEA DIVERS</h1>
            <h1 v-if="language === 'nl'">GROT- & DIEPZEEDUIKERS</h1>

            <hr />
            <p v-if="language === 'en'">
              The risks and challenges of deep-see diving (decompression,
              preparations,, how to deal with sharks and other see creatures,
              coral cuts)
              <br />
              The bends, barotrauma : prevention, managing
              <br />
              Dive tables
            </p>
            <p v-if="language === 'nl'">
              De risico's en uitdagingen van diepzeeduikers
              <br />
              Decompressieziekte ( the bends) : wat , preventie
              <br />
              Contact met onderwaterflora en -fauna
              <br />
              Duiktabellen : wat , hoe interpreteren
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

@media screen and (max-width: 800px) {
  #forwho.container {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
