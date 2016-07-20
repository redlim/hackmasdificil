angular
    .module('app')
    .component('loginSummer', {
        templateUrl: 'app/login/login.html',
        controller: TechsController
    });

/** @ngInject */
function TechsController($http) {
    var vm = this;

    vm.login = function () {
        $http
            .post('http://app.hackmasdificil.com/api/login/')
            .then(function (response) {
                vm.techs = response.data.outcome;
            });
    };

}
