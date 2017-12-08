angular.module(
  "app",
  ["ui.router"],
  config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
      name: "home",
      url: "/",
      component: "home"
    });

    $urlRouterProvider.otherwise("/");
  })
);
