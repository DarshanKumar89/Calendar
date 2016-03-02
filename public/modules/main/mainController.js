
'use strict';


angular.module('pdata.main').controller('mainController', ['$scope', 'mainResource', function($scope, mainResource) {


$scope.DOB=[  
   {  
      "name":"Tyrion Lannister",
      "birthday":"12/02/1978"
   },
   {  
      "name":"Cersei Lannister",
      "birthday":"11/30/1975"
   },
   {  
      "name":"Daenerys Targaryen",
      "birthday":"11/24/1991"
   },
   {  
      "name":"Arya Stark",
      "birthday":"11/25/1996"
   },
   {  
      "name":"Jon Snow",
      "birthday":"12/03/1989"
   },
   {  
      "name":"Sansa Stark",
      "birthday":"15/08/1992"
   },
   {  
      "name":"Jorah Mormont",
      "birthday":"12/16/1968"
   },
   {  
      "name":"Jaime Lannister",
      "birthday":"12/06/1975"
   },
   {  
      "name":"Sandor Clegane",
      "birthday":"11/07/1969"
   },
   {  
      "name":"Tywin Lannister",
      "birthday":"10/12/1951"
   },
   {  
      "name":"Theon Greyjoy",
      "birthday":"12/31/1989"
   },
   {  
      "name":"Samwell Tarly",
      "birthday":"12/07/1990"
   },
   {  
      "name":"Joffrey Baratheon",
      "birthday":"06/12/1992"
   },
   {  
      "name":"Catelyn Stark",
      "birthday":"12/03/1962"
   },
   {  
      "name":"Bran Stark",
      "birthday":"12/02/1995"
   },
   {  
      "name":"Petyr Baelish",
      "birthday":"11/20/1974"
   },
   {  
      "name":"Robb Stark",
      "birthday":"11/28/1986"
   },
   {  
      "name":"Brienne of Tarth",
      "birthday":"11/27/1985"
   },
   {  
      "name":"Margaery Tyrell",
      "birthday":"12/02/1989"
   },
   {  
      "name":"Stannis Baratheon",
      "birthday":"09/14/1971"
   },
   {  
      "name":"Davos Seaworth",
      "birthday":"02/13/1973"
   },
   {  
      "name":"Tormund Giantsbane",
      "birthday":"12/14/1974"
   },
   {  
      "name":"Jeor Mormont",
      "birthday":"11/01/1955"
   },
   {  
      "name":"Eddard Stark",
      "birthday":"12/02/1963"
   },
   {  
      "name":"Khal Drogo",
      "birthday":"12/05/1980"
   },
   {  
      "name":"Ramsay Bolton",
      "birthday":"12/05/1976"
   },
   {  
      "name":"Robert Baratheon",
      "birthday":"12/02/1965"
   },
   {  
      "name":"Daario Naharis",
      "birthday":"12/02/1985"
   },
   {  
      "name":"Viserys Targaryen",
      "birthday":"12/06/1984"
   }
]; 

$scope.calAge=function(){

for (var  i = 0; i < $scope.DOB.length ; i++) {
  
$scope.DOB[i].age=getAge($scope.DOB[i].birthday);

$scope.DOB[i].initials=getAge($scope.DOB[i].name);

var a=$scope.DOB[i].name.split(' ');
  
$scope.DOB[i].initials=a[0].slice(0,1)+a[a.length-1].slice(0,1);


$scope.d = new Date($scope.DOB[i].birthday);
$scope.DOB[i].week = $scope.d.getDay();

}


  

console.log($scope.DOB);






}

$scope.calAge();

$scope.year ="";

function getAge(dateString) { 
  var birthDate = new Date(dateString);
  var age = 2014 - birthDate.getFullYear(); 
  return age;
};



}]);


