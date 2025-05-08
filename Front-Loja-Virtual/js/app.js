let app = angular.module('lojaVirtualApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'AuthController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController'
        })
        .when('/products', {
            templateUrl: 'views/products.html',
            controller: 'ProductController'
        })
        .when('/cart', {
            templateUrl: 'views/cart.html',
            controller: 'CartController'
        })
        .when('/add-product', {
            templateUrl: 'views/addProduct.html',
            controller: 'AddProductController'
        })
        .otherwise({
            redirectTo: '/products'
        });
});
