<template>
  <div class=" fill-body" id="navigation">
    <Navbar />
    <main class="app-content fill-body">
      <SurveySidebarComponent
        v-bind:selectedForm="selectedForm"
        @updated-selection="onSidebarClicked"
      />
      <SelectedForms v-bind:form="selectedForm" />
      <!--SurveyCreatorComponent /-->
    </main>
    <Footer id="footer" />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import SurveySidebarComponent from "./SurveySidebarComponent.vue";
import SelectedForms from "./SelectedForms.vue";
//import SurveyCreatorComponent from "./components/SurveyCreatorComponent.vue";
import Footer from "./Footer.vue";

export default {
  name: "Navigation",
  components: {
    Navbar,
    Footer,
    SurveySidebarComponent,
    SelectedForms
    //ApplicantExperience

    //SurveyCreatorComponent
  },
  methods: {
    onSidebarClicked(value) {
      console.log("Was '" + this.form + "'");
      this.form = value;
      console.log("Is now '" + this.form + "'");

      return value;
    }
  },
  computed: {
    form: {
      get: function() {
        return this.selectedForm;
      },
      set: function(newValue) {
        this.selectedForm = newValue;
      }
    }
  },
  data() {
    return {
      selectedForm: "getting-started"
    };
  }
};
</script>

<style lang="scss">
.app-main {
  flex: auto;
  padding: 0 15px 80px;
}

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
  padding-bottom: 3.5rem;
  min-height: 100%;
}

.sidebar-left,
.sidebar-right {
  display: block;
  flex: none;
  overflow: hidden;
  position: relative;
  transition: width 0.2s ease-in;
  width: $sidebar-width-md;
  &.insert-hidden {
    width: 0;
  }
}
@include media-breakpoint-up(lg) {
  .sidebar-left,
  .sidebar-right {
    width: $sidebar-width-lg;
  }
}

// Header styles

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

.navbar .navbar-extra {
  display: inline-block;
  flex: 1 1 auto;
  text-align: right;
}

.app-exit,
.navbar {
  .btn-primary {
    border-color: #ccc;
  }
}

@include media-breakpoint-down(md) {
  .navbar .navbar-text {
    font-size: 1em;
  }
  .navbar .navbar-extra {
    flex: 0 1 auto;
  }
}

#app-exit {
  padding: 8px 15px;
  position: absolute;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
  .btn {
    border-radius: 10rem;
    font-size: 110%;
    padding: 0.5em 1em;
  }
}

// https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/

#footer {
  position: absolute;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.5rem; /* Footer height */
}
</style>
