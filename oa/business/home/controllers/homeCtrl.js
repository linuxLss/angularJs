define(["angular","js/directives/myNameDirct","js/directives/unorderedListDirct"],function(){
    var homeCtrl = ["$scope", function ($scope) {
        $scope.title = "This is About page";
        $scope.userName="liMing66666.....77777777....";

        var testLocal = localStorage.getItem("testLocal");

        console.log("testLocal.........."+testLocal);

        $scope.testConsole = function(){
            console.log("homeCtrl..55555555....88888888888....");
        };

        $scope.nameInfo = "liangss11233";


        $scope.products = [{name:"Apples",price:1.2},
            {name:"Bananas",price:2.4},
            {name:"Pears",price:3.1}];

        $scope.products2 = [{name:"Apples",price:1.52},
            {name:"Bananas",price:2.554},
            {name:"Pears",price:3.551}];

        // $scope.products = {price:3.1};

        $scope.clickMe = function() {
            //$scope.testController = "";
            $("#testController").val("aaaaaaaaaabbbbbbbb");
            console.log("$scope.testController....."+ $scope.testController);
        }

    }];
    return homeCtrl;
});