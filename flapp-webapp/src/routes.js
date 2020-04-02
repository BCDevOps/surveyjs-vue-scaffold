import LandingPage from './components/landingNavigation/LandingPage.vue';
import login from './components/landingNavigation/login.vue';
import serviceLocator from './components/landingNavigation/serviceLocator.vue';
import FlappSurveys from './components/FlappSurveys.vue';
import status from './components/status/status.vue'

const routes = [
    { path: "/", redirect: {name: "LandingPage"}},
    { path: '/', name: 'LandingPage', component: LandingPage },
    { path: '/login', name: 'login', component: login, props: true} ,
    { path: '/serviceLocator', name:'serviceLocator', component:serviceLocator },
     { path: '/getStarted', name: 'FlappSurveys', component: FlappSurveys },
    { path: '/status', name: 'status', component: status }
];

export default routes;