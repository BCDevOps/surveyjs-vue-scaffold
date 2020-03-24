<template>
  <!-- https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp -->
  <div class="sidebar-left" id="sidebar-left">
    <div class="sidebar-container" id="sidebar">
      <div class="sidebar-title">
        <h3>Application Steps</h3>
      </div>
      <ul
        class="surveys"
        v-if="
          typeof surveyJSONs !== 'undefined' &&
            surveyJSONs !== null &&
            surveyJSONs.length > 0
        "
      >
        <li
          tabindex="0"
          v-for="(survey, surveyIndex) in surveyJSONs"
          v-bind:key="surveyIndex"
          v-bind:id="getSurveyId(surveyIndex)"
          v-bind:index="surveyIndex"
          v-bind:class="{
            current: surveyIndex === selectedSurveyIndex
          }"
          v-on:click="onSelectSurvey($event)"
        >
          <div class="current-header">
            <div class="link-icon"><i class="fa fa-users"></i></div>
            <div class="link-label">
              {{ surveyJSONs[surveyIndex].surveyJSON.title }}
            </div>
          </div>
          <div
            v-bind:id="getSurveyGroupId(surveyIndex)"
            v-bind:index="surveyIndex"
            v-bind:style="
              surveyIndex === selectedSurveyIndex
                ? 'display: block;'
                : 'display: none;'
            "
          >
            <ul>
              <li
                tabindex="1"
                v-for="(page, pageIndex) in surveyJSONs[surveyIndex].surveyJSON
                  .pages"
                v-bind:key="pageIndex"
                v-bind:id="getSurveyPageId(surveyIndex, pageIndex)"
                v-bind:index="pageIndex"
              >
                <div
                  class="link-label"
                  v-on:click="onSelectPage($event)"
                  v-if="selectedPageIndex === pageIndex"
                >
                  <u>{{ page.title }}</u>
                </div>
                <div
                  class="link-label"
                  v-on:click="onSelectPage($event)"
                  v-else
                >
                  {{ page.title }}
                </div>
              </li>
            </ul>
          </div>
        </li>

        <li class="separate" />
        <li tabindex="-1" id="print" class="disabled">
          <div class="link-icon">{{ surveyJSONs.length + 1 }}</div>
          <div class="link-label">Print Application Forms</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";

export default {
  name: "NavigationSidebar",
  data() {
    return {};
  },
  methods: {
    onSelectSurvey: function(event) {
      var currIndex = this.selectedSurveyIndex;
      var curr = document.getElementById(this.getSurveyId(currIndex));
      var currChildGroup = document.getElementById(
        this.getSurveyGroupId(currIndex)
      );
      var next = event.currentTarget;
      var nextIndex = parseInt(next.getAttribute("index"));
      var nextChildGroup = document.getElementById(
        this.getSurveyGroupId(nextIndex)
      );

      this.$store.commit(
        "listName",
        this.surveyJSONs[nextIndex].surveyJSON.title
      );

      if (curr == next) {
        // same choice.
        next.classList.add("current");
        nextChildGroup.style.display = "block";
      } else {
        next.classList.add("current");
        nextChildGroup.style.display = "block";

        curr.classList.remove("current");
        currChildGroup.style.display = "none";
      }

      this.$emit("updated-survey-index", parseInt(nextIndex));
    },
    //TODO: This is where the step is selected
    onSelectPage: function(event) {
      // var step1 = document.getElementById("fpo-group");
      //console.log("page11 is " + page1);
      console.log("this.selectedPage is " + this.selectedPage);
      var prevPage = document.getElementById(this.selectedPage);
      console.log("prev page is " + prevPage);
      var currPage = event.currentTarget;
      console.log("curr page is " + currPage);

      if (prevPage == currPage) {
        // same choice; do nothing
      } else {
        currPage.classList.add("current");

        if (prevPage !== null) {
          prevPage.classList.remove("current");
        }
      }

      this.$emit("updated-page-index", event.currentTarget.pageIndex);
    },
    getSurveyId: function(surveyIndex) {
      return "survey-" + surveyIndex;
    },
    getSurveyGroupId: function(surveyIndex) {
      return this.getSurveyId(surveyIndex) + "-group";
    },
    getSurveyPageId: function(surveyIndex, pageIndex) {
      return this.getSurveyId(surveyIndex) + "-page-" + pageIndex;
    }
  },
  props: {
    selectedSurveyIndex: Number,
    selectedPageIndex: Number,
    surveyJSONs: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/common";

/* Active/current link */
.sidebar a.active {
  background-color: #fcba19;
  color: white;
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
      //background: $gov-gold;
      .verticalLine {
        border-left: solid $gov-gold;
      }
      .link-icon {
        //background: $gov-gold;
        border-color: $link-current-color;
        color: $link-current-color;
        font-weight: bold;
      }
      .link-label {
        //background: $gov-gold;
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
  height: 38px;
  line-height: 34px;
  width: 38px;
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

.surveys {
  display: block;
  list-style-type: none;
  margin: 0;
  max-width: 100%;
  padding: 0;
  li {
    cursor: pointer;
    //display: flex;
    //flex-flow: row wrap;
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
      //background: $gov-gold;
      .current-header {
        flex-flow: row nowrap;
        background: $gov-gold;
        display: flex;
        list-style-type: none;
        margin: 0;
        width: 100%;
        padding: 1em 1em;
        .link-icon {
          //background: $gov-gold;
          border-color: $link-current-color;
          color: $link-current-color;
          font-weight: bold;
        }
        .link-label {
          //background: $gov-gold;
          color: $link-current-color;
        }
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
    div {
      ul {
        margin: 1em 2em;
        border-left: solid $gov-gold;
        li {
          padding: 0;
          margin: 0;
        }
      }
    }
  }
}
</style>
