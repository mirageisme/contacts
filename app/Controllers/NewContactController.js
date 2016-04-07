/**
 * Created by Shahid on 2/16/2016.
 */


Contacts.controller('NewContactController', ['$scope', function ($scope) {

    $scope.contact = {};


    $scope.saveNewContact = function () {

        console.log($scope.contact);
    }


}]);
