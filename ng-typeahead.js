// ngTypeahead.js
// 
// v 0.0.3
// 
// Custom Directive for Bootstrap Typeahead extension
angular.module('ngTypeahead', [])
.directive('typeahead', function($http){
  'use strict';
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      element.typeahead({
        // add any more typeahead parameters
        ajax: { 
          url: attrs.typeahead,
          method: 'get'}, 
        itemSelected: function(item, val, text) {
          scope.$apply(function(){
            ngModel.$setViewValue(val);
          });
        }
      });
      // when ngModel is set, need to select the right value from
      // typeahead.
      ngModel.$render = function () {
        $http.get(attrs.typeahead).success(function(data){
          data.forEach(function(item){
            if(item.id === ngModel.$viewValue) {
              element.val(item.name);
            }
          });
        });
      };
    }
  }
});