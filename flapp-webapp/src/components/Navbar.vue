<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <!-- Navbar content -->

      <div class="container-fluid">
        <a class="navbar-brand" href="https://www2.gov.bc.ca">
          <img
            class="img-fluid d-none d-md-block"
            src="../assets/images/bcid-logo-rev-en.svg"
            width="177"
            height="44"
            alt="B.C. Government Logo"
          />

          <img
            class="img-fluid d-md-none"
            src="../assets/images/bcid-symbol-rev.svg"
            width="63"
            height="44"
            alt="B.C. Government Logo"
          />
        </a>
        <div class="navbar-brand navbar-text">
          Apply for a Family Law Act Protection Order
          <span class="navbar-tag">BETA</span>
        </div>

        <div class="navbar-extra">
          <div id="app-profile">
            <a routerLink="" class="btn btn-primary"
              ><span class="fa fa-user"></span> Profile</a
            >
          </div>
        </div>
        <div id="app-exit" class="app-exit">
          <a
            target="_blank"
            href="https://www.google.ca"
            rel="external"
            class="btn btn-primary"
            ><span class="fa fa-sign-out"></span> Quick Exit</a
          >
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <!-- <a class="nav-item nav-link" href="#">Home</a>
            <a class="nav-item nav-link" href="#">Getting Started</a>
            <a class="nav-item nav-link" href="#">Theme Demo</a> -->
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      meal: ""
    };
  },
  methods: {
    getMeal() {}
  }
};
</script>

<style scoped>
.app-outer {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100%;
}

.app-content {
  display: flex;
  flex: 1 0 auto;
  flex-flow: row nowrap;
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 0;
}

.app-main {
  flex: auto;
  padding: 0 15px 80px;
}

.sidebar-left,
.navbar-tag {
  border: 1px solid #fff;
  border-radius: 2px;
  display: inline-block;
  font-size: 60%;
  line-height: 1;
  margin-left: 0.5em;
  padding: 0.25em 0.5em;
  vertical-align: text-bottom;
}

.app-exit + .navbar {
  padding-right: 170px;
}

.navbar-brand:not(.logo) {
  flex: 1 1 auto;
}

.navbar-extra {
  display: inline-block;
  flex: 1 1 auto;
  text-align: right;
}
</style>
