var ProductApp = angular.module('ProductApp', []);
ProductApp.controller('HomeController', function ($scope, ProductService) {

    getProducts();
    function getProducts() {
        ProductService.getProducts()
            .then(function (response) {
                $scope.products = response.data;
                console.log($scope.products);
            }),function (error) {
                $scope.status = 'Unable to load product data: ' + error.message;
                console.log($scope.status);
            };
    }
});

ProductApp.factory('ProductService', ['$http', function ($http) {

    var ProductService = {};
    ProductService.getProducts = function () {
        return $http.get('/Home/GetProducts');
    };
    return ProductService;

}]);