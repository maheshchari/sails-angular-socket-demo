'use strict';

describe('Controller: CountryCtrl', function () {

  // load the controller's module
  beforeEach(module('App'));

  var CountryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CountryCtrl = $controller('CountryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
