/**
 * Created by Shahid on 2/17/2016.
 */


Contacts.controller('ShowContactController', ['$scope', '$routeParams', function ($scope, $routeParams) {

    // Sample Data
    //[{"firstName":"Khaled","lastName":"Najar","phone":"+962795245699","email":"khaled@email.com","image":null},{"firstName":"Mustafa","lastName":"Dwaikat","phone":"+9627952569655","email":"mustafa@gmail.com","image":null},{"firstName":"Khaled","lastName":"Najar","phone":"+962795245699","email":"khaled@email.com","image":null},{"firstName":"Mustafa","lastName":"Dwaikat","phone":"+9627952569655","email":"mustafa@gmail.com","image":null},{"firstName":"Khaled","lastName":"Najar","phone":"+962795245699","email":"khaled@email.com","image":""},{"firstName":"Mustafa","lastName":"Dwaikat","phone":"+9627952569655","email":"mustafa@gmail.com","image":""}]

    $scope.contactsList = JSON.parse(localStorage.getItem('contacts'));

    $scope.contact = $scope.contactsList.filter(function (el) {
        return el.id == $routeParams.id
    })[0];

}]);