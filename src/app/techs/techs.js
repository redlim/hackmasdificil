angular
  .module('app')
  .component('fountainTechs', {
    templateUrl: 'app/techs/techs.html',
    controller: TechsController
  });

/** @ngInject */
function TechsController($http) {
  var vm = this;

  $http
    .get('http://app.hackmasdificil.com/api/challenges/')
    .then(function (response) {
      vm.techs = response.data.outcome;
    });
}
