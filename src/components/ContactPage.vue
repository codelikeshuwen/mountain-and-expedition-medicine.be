<script>
import PageHeader from "./PageHeader.vue";
import PageFooter from "./PageFooter.vue";

export default {
  name: "ContactPage",
  components: { PageHeader, PageFooter },
  data() {
    return {};
  },
};
</script>

<template>
  <div id="contact" class="page">
    <PageHeader />
    <main>
      <div class="bg">
        <div id="contact" class="container">
          <img
            src="@/assets/images/dokter-wim-hullaert.jpg"
            alt="docter-img2"
          />

          <div class="textbox">
            <h1>GET IN TOUCH</h1>
            <p>
              Are you planning an expedition? Preparing for a super marathon?
              Get in touch for medical advice, guidance, vaccinations and
              fysical tests to prepare you for your challenges.
            </p>

            <h3>Doctor Wim Hullaert</h3>
            <h4>Dorpsstraat 46, 9080 Lochristi, BELGIUM</h4>
            <h4>+32 475787118</h4>
            <a href="mailto:whullaert@yahoo.com">whullaert@yahoo.com</a>
          </div>
        </div>
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<style>
#contact.page {
  background-image: url("@/assets/images/bg-lake.jpg");
}

#contact.container {
  gap: 2%;
  align-items: flex-start;
}
.textbox {
  max-width: 440px;
}

a,
h4,
h1,
h3,
p {
  color: white;
  font-family: "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", sans-serif;
}

h1 {
  font-weight: 900;
}

h3 {
  font-weight: bold;
  font-size: 13px;
}

a,
h4 {
  margin: 0%;
  font-size: 13px;
  font-weight: 100;
  line-height: 20px;
}

#contact.container img {
  width: 200px;
  object-fit: contain;
  border: 2px solid white;
  margin: 30px 0px;
}

@media screen and (max-width: 800px) {
  #contact.container img {
    margin: 30px 0px;
  }
}
</style>
