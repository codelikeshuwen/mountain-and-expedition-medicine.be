<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";

export default {
  name: "HomePage",
  components: { PageHeader, PageFooter },
  data() {
    return {
      language: "nl",
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
            <h1 v-if="language === 'en'">MEDICAL ADVICE & GUIDANCE</h1>
            <h1 v-if="language === 'nl'">MEDISCH ADVIES & BEGELEIDING</h1>

            <h2 v-if="language === 'en'">
              FOR ADVENTURERS, MOUNTAINEERS, SPORTERS AND EXPEDITIONS TO EXTREME
              / EXOTIC REGIONS
            </h2>
            <h2 v-if="language === 'nl'">
              VOOR AVONTURIERS, BERGBEKLIMMERS, SPORTERS EN EXPEDITIES NAAR
              EXTREME / EXOTISCHE OORDEN
            </h2>
            <p v-if="language === 'en'">
              The interest in trekkings in remote areas,in people who want to
              maximize medical self-reliance, in persons who will make a unique
              journey (once in a life time) f.e trekking around the Annapurna
              pushed me to share my knowledge ,and promote best medical practice
              in remote environments in order to reduce health risks and to
              increase self-reliance in this areas.
            </p>
            <p v-if="language === 'nl'">
              De belangstelling voor trekkings in afgelegen gebieden, voor
              personen die een unieke reis, uitdaging - once in a lifetime- vb
              Annapurnatrektocht - willen maken, heeft mij ertoe aangezet de
              nodige medische expertise te verwerven om deze 'avonturiers' met
              deskundig advies bij te staan met het doel de gezondheids risico's
              in onherbergzame gebieden te verkleinen, de medische
              zelfredzaamheid te vergroten en alzo hun slaagkansen te
              optimaliseren.
            </p>
            <ul class="expertise">
              <li v-if="language === 'en'">
                Course high altitude medicine Cusco Peru 2010
              </li>
              <li v-if="language === 'nl'">
                Cursus bergsportgeneeskunde Cusco Peru 2010
              </li>

              <li v-if="language === 'en'">
                Course wilderness & expedition medicine Keswick UK 2012
              </li>
              <li v-if="language === 'nl'">
                Cursus en stage wilderness & expedition medicine Keswick UK 2012
              </li>
              <li v-if="language === 'en'">
                Wilderness&desert course Namibie 2015
              </li>
              <li v-if="language === 'nl'">
                Wildernis&woestijncursus Namibie 2015
              </li>
              <li v-if="language === 'en'">
                Mountain medecine course Everest Basecamp Nepal 2017
              </li>
              <li v-if="language === 'nl'">
                Cursus berggeneeskunde Nepal (Everest Base Camp) 2017
              </li>
              <li v-if="language === 'en'">
                Expedition medicine course Botswana 2018
              </li>
              <li v-if="language === 'nl'">
                Expeditie geneeskunde cursus Botswana 2018
              </li>
              <li v-if="language === 'en'">
                WEM (world extreme medicine) congres Edinburgh 2021
              </li>
              <li v-if="language === 'nl'">
                WEM (world extreme medicine) congres Edinburgh 2021
              </li>

              <li v-if="language === 'en'">
                Advice for outdoor-sporters, expedition members, members of
                charity organisations who lack medical assistance in remote
                areas.
              </li>
              <li v-if="language === 'nl'">
                Advies voor buitensporters, expeditieleden,vrijwilligers van
                hulporganisaties, die in afgelegen gebieden verwijderd zijn van
                medische zorg.
              </li>
              <li v-if="language === 'en'">
                Advice: individual, group sessions,presentations
              </li>
              <li v-if="language === 'nl'">
                Advies: individueel,in groep,presentaties
              </li>
              <li v-if="language === 'en'">
                Vaccinationshedules, medical kits, endurance performance, gear
                information
              </li>
              <li v-if="language === 'nl'">
                oppuntstelling fysieke conditie vaccinatieschema , medische
                noodkit logistiek : kledij , materiaal
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
  font-weight: 900;
  font-size: 14px;
}

.language a,
p,
li {
  font-family: "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", sans-serif;
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
