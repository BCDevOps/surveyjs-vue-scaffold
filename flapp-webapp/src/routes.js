import LandingPage from './components/landingNavigation/LandingPage.vue';
import Login from './components/landingNavigation/Login.vue';
import ServiceLocator from './components/landingNavigation/ServiceLocator.vue';
import FlappSurveys from './components/FlappSurveys.vue';
import Status from './components/status/Status.vue'

const routes = [
    { path: '/', component: LandingPage },
    { path: '/login', name: 'login', component: Login, props: true} ,
    { path: '/serviceLocator', name:'serviceLocator', component:ServiceLocator },
    { path: '/getStarted', name: 'FlappSurveys', component: FlappSurveys },
    { path: '/status', name: 'status', component: Status }
];

export default routes;