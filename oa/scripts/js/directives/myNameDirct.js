define(["angularAMD"],function(angularAMD){
    angularAMD.directive("myName",function(){
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                //scope.nameInfo="liangShaosong";
                console.log("lss.....myName....."+attrs["myName"]);
                console.log("lss....scope.myName....."+scope[attrs["myName"]]);
                console.log("lss.....directive....."+scope.nameInfo);

                var listElem = angular.element("<ul>");
                element.append(listElem);
                listElem.append(angular.element("<li>").text(scope.nameInfo));
            }
        }
    });
});