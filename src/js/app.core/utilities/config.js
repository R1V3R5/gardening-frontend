function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/core/layout.tpl.html',
      controller: 'LayoutController as vm'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/users/register.tpl.html',
      controller: 'RegisterController as vm'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/users/login.tpl.html',
      controller: 'LoginController as vm'
    })
    .state('admin', {
      abstract: true,
      templateUrl: 'templates/admin/admin.tpl.html'
    })
    .state('admin.index', {
      url: '/admin',
      templateUrl: 'templates/admin/index.tpl.html',
      controller: 'AdminController as vm'
    })
    .state('admin.plant', {
      url: '/admin/plants',
      templateUrl: 'templates/admin/plants/index.tpl.html',
      controller: 'AdminPlantController as vm'
    })
    .state('admin.newPlant', {
      url: '/admin/plants/new',
      templateUrl: 'templates/admin/plants/new.tpl.html',
      controller: 'AdminNewPlantController as vm'
    });

    $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config }