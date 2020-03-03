<template>
  <div class="fill-height-lg" id="Selected forms">
    <b-container class="fill-body">
      <!--div id="surveyResult"></div-->
      <GettingStarted v-if="form === 'getting-started'" />
      <ApplicantInfo v-else-if="form === 'applicant-information'" />
      <FPO v-else-if="form === 'fpo'" />
      <FLM v-else-if="form === 'flm'" />
      <ChildRelocation v-else-if="form === 'child-relocation'" />
      <Parenting v-else-if="form === 'parenting'" />
      <CaseMgmt v-else-if="form === 'case-mgmt'" />
      <Enforcement v-else-if="form === 'enforcement'" />
    </b-container>
  </div>
</template>

<script>
import * as SurveyVue from "survey-vue";
import GettingStarted from "./GettingStarted";
import ApplicantInfo from "./ApplicantInfo.vue";
import FPO from "./FPO";
import FLM from "./FLM";
import ChildRelocation from "./ChildRelocation";
import Parenting from "./Parenting.vue";
import CaseMgmt from "./CaseMgmt.vue";
import Enforcement from "./Enforcement.vue";

SurveyVue.StylesManager.applyTheme("bcgov");

/* survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
}); */

export default {
  name: "SelectedForms",
  data() {
    return {};
  },
  components: {
    GettingStarted,
    ApplicantInfo,
    FPO,
    FLM,
    ChildRelocation,
    Parenting,
    CaseMgmt,
    Enforcement
  },
  props: {
    form: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/_survey.scss";

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

/*
 * imported from survey.components.scss
 */

// utility navigation
.survey-cache-info {
  padding: 0 1.5em;
  position: absolute;
  right: 0;
}
// util nav items, profile, log-out button
button.util-nav,
a.util-nav {
  background: none;
  border: none;
  padding-top: 0.65em;
  font-size: 16px;
  /*&:hover {
    color: $gov-mid-blue;
  }*/
}
button.util-nav {
  &:before {
    content: " | ";
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}
a.util-nav {
  text-decoration: none;
}

.cache-time {
  padding-right: 1em;
  color: $gov-navy-blue;
}

.survey-nav-left,
.survey-nav-right {
  display: inline-block;
}
.survey-nav-left {
  margin-right: 1em;
}
.btn-primary {
  border-color: #ccc;
}
</style>
