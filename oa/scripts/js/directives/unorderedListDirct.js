define(["angularAMD"],function (angularAMD){
    angularAMD.directive("unorderedList",function() {
        return {
           /* link:function(scope, element, attrs) {
                scope.data = scope[attrs["unorderedList"]];
            },*/
            //restrict:"A",
            //replace:true,
            scope:{
                data : "=orderInfos"
            },
            transclude : true,
            template:"<ul><li ng-repeat='item in data'>{{item.name}} : {{item.price | currency}}</li></ul>"
            //template:"<ul><li >{{data}}</li></ul>"
        }
    });
});


/*

define(["angularAMD"],function (angularAMD){
    angularAMD.directive("unorderedList",function() {
        return {
            link:function(scope, element, attrs) {
                scope.data = scope[attrs["unorderedList"]];
            },
            restrict:"A",
            replace:true,
            scope:true,
            template:"<ul><li ng-repeat='item in data'>{{item.price | currency}}</li></ul>"
        }
    });
});
*/

/*
define(["angularAMD"],function (angularAMD){
    angularAMD.directive("unorderedList",function() {
        return {
            link:function(scope, element, attrs) {
                var data = scope[attrs["unorderedList"] || attrs["listSource"]];
                var propertyExpression = attrs["listProperty"] || "price | currency";
                if (angular.isArray(data)) {
                    var listElem = angular.element("<ul>");
                    if (element[0].nodeName == "#comment") {
                        element.parent().append(listElem);
                    } else {
                        element.append(listElem);
                    }
                    for (var i = 0; i < data.length; i++) {
                        var itemElement = angular.element("<li>").text(scope.$eval(propertyExpression, data[i]));
                        listElem.append(itemElement);
                    }
                }
            },
            restrict:"EACM"
        }
    });
});
*/


/*
define(["angularAMD"],function (angularAMD){
    angularAMD.directive("unorderedList",function(){
        return function(scope,element,attrs) {
            var data = scope[attrs["unorderedList"]];
            var propertyExpression = attrs["listProperty"];
            if (angular.isArray(data)){
                var listElem = angular.element("<ul>");
                element.append(listElem);
                for (var i=0; i<data.length; i++) {
                    var itemElement = angular.element("<li>").text(scope.$eval(propertyExpression,data[i]));
                    listElem.append(itemElement);
                }
            }
        }
    });
});
*/
