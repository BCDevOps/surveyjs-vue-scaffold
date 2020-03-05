<template>
  <!-- https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp -->
  <div class="sidebar-left" id="sidebar-left">
    <div class="sidebar-container" id="SurveySidebarComponent">
      <div class="sidebar-title">
        <h3>Application Steps</h3>
      </div>
      <ul class="links">
        <li
          tabindex="0"
          class="current"
          id="getting-started"
          v-on:click="onSelectStage($event)"
        >
          <div class="link-icon">1</div>
          <div class="link-label">Getting Started</div>
        </li>
        <li
          tabindex="0"
          id="applicant-information"
          v-on:click="onSelectStage($event)"
        >
          <div class="link-icon">2</div>
          <div class="link-label">Applicant information</div>
        </li>
        <li tabindex="0" id="fpo" v-on:click="onSelectStage($event)">
          <div class="link-icon">3</div>
          <div class="link-label">FPO Form</div>
          <div id="fpo-group" style="display: none">
            <ul class="links">
              <li
                tabindex="1"
                class="link-label"
                id="step1"
                v-on:click="onSelectStep($event)"
              ></li>
              <li
                tabindex="1"
                class="link-label"
                id="step2"
                v-on:click="onSelectStep($event)"
              ></li>

              <li tabindex="1">
                <div class="link-label">Your (ex-)Partner's Info</div>
              </li>
              <li tabindex="1">
                <div class="link-label">Your Children's Information</div>
              </li>
            </ul>
          </div>
        </li>
        <li tabindex="0" id="flm" v-on:click="onSelectStage($event)">
          <div class="link-icon">4</div>
          <div class="link-label">FLM</div>
        </li>
        <li
          tabindex="0"
          id="child-relocation"
          v-on:click="onSelectStage($event)"
        >
          <div class="link-icon">5</div>
          <div class="link-label">Child Relocation</div>
        </li>
        <li tabindex="0" id="parenting" v-on:click="onSelectStage($event)">
          <div class="link-icon">6</div>
          <div class="link-label">Parenting</div>
        </li>
        <li tabindex="0" id="case-mgmt" v-on:click="onSelectStage($event)">
          <div class="link-icon">7</div>
          <div class="link-label">Case Management</div>
        </li>
        <li tabindex="0" id="enforcement" v-on:click="onSelectStage($event)">
          <div class="link-icon">8</div>
          <div class="link-label">Enforcement</div>
        </li>
        <li class="separate" />
        <li tabindex="-1" id="print" class="disabled">
          <div class="link-icon">9</div>
          <div class="link-label">Print Application Forms</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";

export default {
  name: "SurveySidebarComponent",
  data() {
    return {};
  },
  methods: {
    onSelectStage: function(event) {
      var fpo = document.getElementById("fpo");
      var fpo_group = document.getElementById("fpo-group");
      var prev = document.getElementById(this.selectedForm);
      var curr = event.currentTarget;

      if (prev == curr) {
        // same choice; do nothing
      } else {
        curr.classList.add("current");
        prev.classList.remove("current");

        if (prev == fpo) {
          fpo_group.style.display = "none";
        } else if (curr == fpo) {
          fpo_group.style.display = "block";
        }
      }

      //console.log("updated-selection id :" + event.currentTarget.id);
      //console.log("updated-selection value :" + event.currentTarget.value);

      this.$emit("updated-selection", event.currentTarget.id);
    },
    //TODO: This is where the step is selected
    onSelectStep: function(event) {
      var fpo_group = document.getElementById("step1");
      console.log("clicked on step 1/2 : " + step1);
      var prev = document.getElementById(this.selectedStep);

      this.$emit("updated-step", event.currentTarget.id);
    }
  },
  props: {
    selectedForm: String,
    selectedStep: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 60px 60px 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 100px 100px;
}
a {
  color: #100000;
}

/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #fcba19;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

/*
 * ported from sidebar.component.scss
 */

// outer sidebar
.sidebar-container {
  background: #eee;
  border-right: 2px solid #ddd;
  bottom: 0;
  display: block;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  top: 0;
  width: $sidebar-width-md;
}
@include media-breakpoint-up(lg) {
  .sidebar-container {
    width: $sidebar-width-lg;
  }
}

// sidebar title
.sidebar-title {
  padding: 1rem 2rem 1.5rem;
  h3 {
    margin: 0;
  }
}

// Sidebar Nav

$link-active-color: #349;
$link-current-color: $gov-white;
$link-hover-color: #57d;
$link-disabled-color: #777;

.links {
  display: block;
  list-style-type: none;
  margin: 0;
  max-width: 100%;
  padding: 0;
  li {
    cursor: pointer;
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    margin: 0;
    padding: 0.5rem 1em;
    &.disabled {
      cursor: not-allowed;
    }
    &:not(.current):not(:active):not(:focus):not(.disabled):hover {
      .link-icon {
        border-color: $link-hover-color;
        color: $link-hover-color;
      }
      .link-label {
        color: $link-hover-color;
      }
    }
    &:active,
    &:focus {
      .link-icon {
        border-color: $link-active-color;
        color: $link-active-color;
        font-weight: bold;
      }
      .link-label {
        color: $link-active-color;
      }
    }
    &.current {
      background: $gov-gold;
      .link-icon {
        border-color: $link-current-color;
        color: $link-current-color;
        font-weight: bold;
      }
      .link-label {
        color: $link-current-color;
      }
    }
    &.disabled {
      .link-icon {
        border-color: $link-disabled-color;
        color: $link-disabled-color;
      }
      .link-label {
        color: $link-disabled-color;
      }
    }
    &.separate {
      margin-top: 1em;
      &::before {
        display: block;
        content: " ";
        margin: 0 1.5em;
        position: relative;
        top: -0.75em;
        height: 1px;
        background: #25b;
        width: 100%;
      }
    }
  }
}

.link-icon {
  position: relative;
  top: 0.15em;
  border: 2px solid $text-color-link;
  border-radius: 50%;
  color: $text-color-link;
  font-size: 20px;
  flex: none;
  height: 28px;
  line-height: 24px;
  width: 28px;
  text-align: center;
  transition: border-color color 0.1s linear;
  font-variant-numeric: tabular-nums;
}
.link-icon.fa {
  line-height: 23px;
  padding-left: 2px;
}

.link-label {
  font-size: 1.1em;
  color: $text-color-link;
  padding-left: 10px;
  padding-top: 5px;
  transition: color 0.1s linear;
}
</style>
