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
      <h1>Home</h1>
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
}
</style>
