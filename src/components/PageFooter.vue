<template>
  <footer>
    <div class="footer-container">
      <p>© 2012 All rights reserved to Dokter Wim Hullaert BVBA</p>
      <p>Website by Medisites.be</p>
    </div>
  </footer>
</template>

<style>
footer {
  display: flex;
  justify-content: center;
  padding-bottom: 100px;
}

.footer-container {
  display: flex;
  flex-direction: row;
  width: 865px;
  justify-content: space-between;
}
footer p {
  color: white;
}

@media screen and (max-width: 800px) {
  .footer-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 5vh;
  }
}
</style>
