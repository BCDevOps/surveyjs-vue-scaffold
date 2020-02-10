<template>
  <div id="surveyCreatorComponent">
    <hr />
    <h2>Survey Creator Component</h2>
    <div id="surveyCreatorContainer" />
    <!--div id="surveyResult"></div-->
  </div>
</template>

<script>
//import * as SurveyVue from "survey-vue";
import * as SurveyCreator from "survey-creator";
import "survey-creator/survey-creator.css";

// import * as SurveyKo from "survey-knockout";
// import * as widgets from "surveyjs-widgets";
//import { init as customWidget } from "../customwidget";

//import "inputmask/dist/inputmask/phone-codes/phone.js";

// widgets.icheck(SurveyKo);
// widgets.select2(SurveyKo);
// widgets.inputmask(SurveyKo);
// widgets.jquerybarrating(SurveyKo);
// widgets.jqueryuidatepicker(SurveyKo);
// widgets.nouislider(SurveyKo);
// widgets.select2tagbox(SurveyKo);
// widgets.signaturepad(SurveyKo);
// widgets.sortablejs(SurveyKo);
// widgets.ckeditor(SurveyKo);
// widgets.autocomplete(SurveyKo);
// widgets.bootstrapslider(SurveyKo);
//customWidget(SurveyKo);

SurveyCreator.StylesManager.applyTheme("bootstrap");

//var survey = new Survey(surveyJSON);

/* survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").textContent =
    "Result JSON:\n" + JSON.stringify(result.data, null, 3);
}); */

export default {
  name: "SurveyCreatorComponent",
  data() {
    return {};
  },
  mounted() {
    let options = { showEmbededSurveyTab: true };
    this.container = new SurveyCreator.SurveyCreator(
      "surveyCreatorContainer",
      options
    );
    this.container.saveSurveyFunc = function() {
      //console.log(JSON.stringify(this.text));
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
