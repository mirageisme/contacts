/**
 * Created by Shahid on 2/15/2016.
 */


var Contacts = angular.module('contacts', ['ngRoute']);


Contacts.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/', {
        title: 'Contacts List',
        templateUrl: 'views/list.html',
        controller: 'ContactListController'
    });

    $routeProvider.when('/list', {
        title: 'Contacts List',
        templateUrl: 'views/list.html',
        controller: 'ContactListController'
    });

    $routeProvider.when('/newContact', {
        title: 'New Contact',
        templateUrl: 'views/new.html',
        controller: 'NewContactController'
    });

    $routeProvider.when('/showContact/:id', {
        title: 'Show Contact',
        templateUrl: 'views/show.html',
        controller: 'ShowContactController'
    });

}]);

Contacts.run(['$rootScope', function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);
