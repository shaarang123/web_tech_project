var myApp = angular.module("myModule", []);
var myController = function ($scope)
     {
          var Employee = [
          {
            BookTitle: "Life of Pi",Author: "Yann Martel",Publisher: "P1",StoredAt: "Pune",
          },
          {
               BookTitle: "Strictly for Cash",Author: "James Headly Chase",Publisher: "P2",StoredAt: "Delhi",
          },
          {
               BookTitle: "White Tiger",Author: "Arvind Adiga",Publisher: "P1",StoredAt: "Bengaluru",
          },
          {
               BookTitle: "Gone Girl",Author: "Gillian Flynn",Publisher: "P3",StoredAt: "Nagpur",
          },
          {
               BookTitle: "Candy is Dandy",Author: "Ogden Nash",Publisher: "P3",StoredAt: "Goa",
          }];
     $scope.Emp = Employee;
     };
myApp.controller("myCont", myController);