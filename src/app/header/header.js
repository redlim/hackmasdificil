angular
  .module('app')
  .component('fountainHeader', {
    templateUrl: 'app/header/header.html',
      controller:'headerController'
  })
    .controller('headerController',function () {
        var vm = this;
        
        vm.headerOptions = [
            {name:"Home",    path:"/",         active:true},
            {name:"Registro",path:"/register", active:false},
            {name:"Ranking", path:"/ranking",  active:false},
            {name:"Perfil",  path:"/profile",  active:false},
            {name:"FAQ",     path:"/faq",      active:false},
            {name:"Login",   path:"/login",    active:false},
            {name:"Logout",  path:"/logout",   active:false}
        ];
        
        vm.selectItem = function (item) {
           vm.headerOptions.map(function (element) {
               element.active = false; 
            });
            item.active = true;
        };

    });
