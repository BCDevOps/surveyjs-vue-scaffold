<template>
  <!-- https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp -->
  <div class="sidebar-left" id="sidebar-left">
    <div class="sidebar-container" id="sidebar">
      <div class="sidebar-title">
        <h3>Application Steps</h3>
      </div>
      <a
        class="survey"
        v-for="(survey, surveyIndex) in surveyJSONs"
        v-bind:key="surveyIndex"
        v-bind:id="getSurveyId(surveyIndex)"
        v-bind:index="surveyIndex"
        v-bind:class="{
          current: surveyIndex === selectedSurveyIndex
        }"
        v-on:click="onSelectSurvey($event)"
      >
        <div class="survey-header">
          <div class="header-icon">
            <i v-bind:class="['fa', surveyJSONs[surveyIndex].icon]"></i>
          </div>
          <div class="header-text">
            <div class="text-step">STEP {{ surveyIndex + 1 }}</div>
            <div class="text-title">
              {{ surveyJSONs[surveyIndex].surveyJSON.title }}
            </div>
          </div>
        </div>
        <div
          class="survey-pages"
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
              v-bind:class="{
                current: pageIndex === selectedPageIndex
              }"
              v-on:click="onSelectPage($event)"
            >
              <div class="survey-pages">
                {{ page.title }}
              </div>
            </li>
          </ul>
        </div>
      </a>
      <div class="survey separate"></div>
      <div class="survey">
        <div class="survey-header">
          <div class="header-icon"><i class="fa fa-print"></i></div>
          <div class="header-text">
            <div class="text-step">STEP {{ surveyJSONs.length + 1 }}</div>
            <div class="text-title">
              Print Application Forms
            </div>
          </div>
        </div>
      </div>
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

      this.$emit("updated-survey-index", nextIndex);
    },
    //TODO: This is where the step is selected
    onSelectPage: function(event) {
      // var step1 = document.getElementById("fpo-group");
      //console.log("page11 is " + page1);
      console.log("this.selectedPage is " + this.selectedPageIndex);

      var currSurveyIndex = this.selectedSurveyIndex;
      var currPageIndex = this.selectedPageIndex;
      var currPage = document.getElementById(
        this.getSurveyPageId(currSurveyIndex, currPageIndex)
      );
      console.log("curr page index is " + currPageIndex);
      var nextPage = event.currentTarget;

      var nextPageIndex = parseInt(nextPage.getAttribute("index"));
      console.log("next page is " + nextPageIndex);

      if (currPage == nextPage) {
        // same choice; do nothing
      } else {
        nextPage.classList.add("current");

        if (currPage !== null) {
          currPage.classList.remove("current");
        }
      }

      this.$emit("updated-page-index", nextPageIndex);
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
$survey-header-current-color: #fcba19;
$survey-header-hover-color: #efefef;

.survey-header {
  flex-flow: row nowrap;
  background: #eee;
  display: flex;
  list-style-type: none;
  margin: 0;
  width: 100%;
  padding: 1em 1em;
  .header-icon {
    border-color: $text-color;
    color: $text-color;
    font-weight: bold;
    position: relative;
    top: 0.15em;
    border: 2px solid $text-color;
    border-radius: 50%;
    font-size: 20px;
    flex: none;
    height: 38px;
    line-height: 34px;
    width: 38px;
    text-align: center;
    transition: border-color color 0.1s linear;
    font-variant-numeric: tabular-nums;

    i.fa {
      line-height: 23px;
      padding-left: 2px;
    }
  }
  .header-text {
    display: flex;
    flex-flow: column nowrap;
    padding: 0.2em;
    .text-step {
      font-weight: bold;
    }
    .text-title {
    }
  }
}

.survey-pages {
  margin: 0;
  width: 100%;
  ul {
    list-style-type: none;
    padding: 0;
    border-left: solid $gov-gold;
    margin-left: 2em;
    margin-top: 1em;
    margin-right: 2em;
    li {
      margin-left: 1em;

      &.current {
        color: $gov-gold;
        outline: none;
      }
      &:active {
        outline: none;
      }
    }
  }
}

.survey {
  cursor: pointer;
  display: block;
  list-style-type: none;
  margin: 0;
  max-width: 100%;
  padding: 0;
  &.current {
    .survey-header {
      background: $gov-gold;
      display: flex;
      list-style-type: none;
      margin: 0;
      width: 100%;
      padding: 1em 1em;
      .header-icon {
        border-color: $gov-white;
        color: $gov-white;
      }
      .header-text {
        color: $gov-white;
        display: flex;
        flex-flow: column nowrap;
        color: $link-current-color;
      }
    }
  }
  &.separate {
    margin-top: 2em;
    margin-right: 3em;
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
</style>
