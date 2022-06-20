<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";

export default {
  name: "HomePage",
  components: { PageHeader, PageFooter },
  data() {
    return {};
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
            <h1>MEDICAL ADVICE & GUIDANCE</h1>
            <h2>
              FOR ADVENTURERS, MOUNTAINEERS, SPORTERS AND EXPEDITIONS TO EXTREME
              / EXOTIC REGIONS
            </h2>
            <p>
              The interest in trekkings in remote areas,in people who want to
              maximize medical self-reliance, in persons who will make a unique
              journey (once in a life time) f.e trekking around the Annapurna
              pushed me to share my knowledge ,and promote best medical practice
              in remote environments in order to reduce health risks and to
              increase self-reliance in this areas.
            </p>
            <ul class="expertise">
              <li>Course high altitude medicine Cusco Peru 2010</li>
              <li>Course wilderness & expedition medicine Keswick UK 2012</li>
              <li>Wilderness&desert course Namibie 2015</li>
              <li>Mountain medecine course everest basecamp Nepal 2017</li>
              <li>Expedition medicine course Botswana 2018</li>
              <li>WEM (world extreme medicine) congres Edinburgh 2021</li>

              <li>
                Advice for outdoor-sporters, expedition members, members of
                charity organisations who lack medical assistance in remote
                areas.
              </li>
              <li>Advice: individual, group sessions , presentations</li>
              <li>
                Vaccinationshedules, medical kits, endurance performance, gear
                information
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
</style>
