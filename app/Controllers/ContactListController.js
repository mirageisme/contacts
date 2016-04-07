/**
 * Created by Shahid on 2/16/2016.
 */


Contacts.controller('ContactListController', ['$scope', function ($scope) {

    // Sample Data
    //[{"firstName":"Khaled","lastName":"Najar","phone":"+962795245699","email":"khaled@email.com","image":null},{"firstName":"Mustafa","lastName":"Dwaikat","phone":"+9627952569655","email":"mustafa@gmail.com","image":null},{"firstName":"Khaled","lastName":"Najar","phone":"+962795245699","email":"khaled@email.com","image":null},{"firstName":"Mustafa","lastName":"Dwaikat","phone":"+9627952569655","email":"mustafa@gmail.com","image":null},{"firstName":"Khaled","lastName":"Najar","phone":"+962795245699","email":"khaled@email.com","image":""},{"firstName":"Mustafa","lastName":"Dwaikat","phone":"+9627952569655","email":"mustafa@gmail.com","image":""}]

    $scope.contactsList = JSON.parse(localStorage.getItem('contacts'));

    $scope.changeVariable = function () {
        $scope.value = 'Khaled';
    };


}]);
