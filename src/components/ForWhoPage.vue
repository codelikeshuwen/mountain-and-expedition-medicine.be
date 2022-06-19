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
      <h1>For Who</h1>
    </main>
    <PageFooter />
  </div>
</template>

<style>
#forwho.page {
  background-image: url("@/assets/images/bg-fields.jpg");
}
</style>
