// Custom Directive for Bootstrap Typeahead extension
angular.module('bootstrap', [])

.directive('bstypeahead', function($http){
  'use strict';
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      console.log(element);
      element.typeahead({ajax: { url: attrs.bstypeahead, method: 'get'}, 
        itemSelected: function(item, val, text) {
          ngModel.$setViewValue(val);
          scope.$apply();
        }
      });
      // when ngModel is set, need to select the right value from
      // typeahead.
      ngModel.$render = function () {
        $http.get(attrs.bstypeahead).success(function(data){
          data.forEach(function(item){
            if(item.id === ngModel.$viewValue) {
              element.val(item.name);
            }
          })
        });
        //console.log(ngModel.$viewValue);
      };
    }
  }
});