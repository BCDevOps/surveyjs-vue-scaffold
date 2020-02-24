<template>
  <footer class="footer">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <!-- Navbar content -->
      <div class="container">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www2.gov.bc.ca/gov/content/home/disclaimer"
              target="_blank"
              >Disclaimer</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/terms" target="_blank">Terms of Use</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www2.gov.bc.ca/gov/content/home/privacy"
              target="_blank"
              >Privacy</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www2.gov.bc.ca/gov/content/home/accessibility"
              target="_blank"
              >Accessibility</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www2.gov.bc.ca/gov/content/home/copyright"
              target="_blank"
              >Copyright</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://www2.gov.bc.ca/gov/content/home/contact-us"
              target="_blank"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </footer>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  //line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}
</style>
