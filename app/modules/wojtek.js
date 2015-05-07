 (function () {
 'use strict';

 angular.module('tools.router')
 .provider('routehelperConfig', routehelperConfig)
 .factory('routerhelper', routerhelper);
 
 routehelperConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

 function routehelperConfig($stateProvider, $urlRouterProvider) {
 this.config = {
 $stateProvider: $stateProvider,
 $urlRouterProvider: $urlRouterProvider
 };

 this.$get = function () {
 return {
 config: this.config
 };
 };
 }

 routerhelper.$inject = ['routehelperConfig'];

 function routerhelper(routehelperConfig) {
 var mainRoute = 'main';

 var $stateProvider = routehelperConfig.config.$stateProvider;
 var $urlRouterProvider = routehelperConfig.config.$urlRouterProvider;

 var service = {
 mainRoute: mainRoute,
 addRoutes: addRoutes
 };

 return service;

 function addRoutes(routes) {
 routes.forEach(function (route) {
 var config = route.config;
 config.url = route.url;
 $stateProvider.state(route.route, config);

 if (config.mainRoute === true) {
 mainRoute = route.route;
 }
 });

 $urlRouterProvider.otherwise(mainRoute);
 }
 }

 })();
 (function () {
 'use strict';

 angular.module('reportconsole.msdiagnostic').run(routeConfig);

 routeConfig.$inject = ['routerhelper'];

 function routeConfig(routerhelper) {
 routerhelper.addRoutes(getRoutes());
 }
 
 function getRoutes() {
 return [{
 route: 'msdiagnostic',
 mainRoute: true,
 url: '/msdiagnostic',
 config: {
 templateUrl: 'app/msdiagnostic/msdiagnostic.html'
 }
 }];
 }
 })();