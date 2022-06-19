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
      <h1>Contact</h1>
    </main>
    <PageFooter />
  </div>
</template>

<style>
#contact.page {
  background-image: url("@/assets/images/bg-lake.jpg");
}
</style>
