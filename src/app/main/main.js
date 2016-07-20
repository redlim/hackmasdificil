angular
    .module('app')
    .component('app', {
    templateUrl: 'app/main/main.html'
  })
    .run(function($http) {
    $http.defaults.headers.common['x-api-key'] = 'da8c8fa2-7cee-4bdd-bd85-247c0cdbe5da';
});