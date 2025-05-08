app.controller('ProductController', function ($scope, $http, $location, $rootScope, AuthService) {
    $scope.products = [];

    $scope.loadProducts = function () {
        $http.get('http://localhost:5500/products')
            .then(function (response) {
                $scope.products = response.data;
            })
            .catch(function (error) {
                console.error('Erro ao carregar produtos:', error);
            });
    };

    $scope.addToCart = function (productId) {
        const token = AuthService.getToken();
        if (!token) {
            alert('Você precisa estar logado para adicionar ao carrinho.');
            return;
        }

        $http.post('http://localhost:5500/cart',
            { productId, quantity: 1 },
            { headers: { Authorization: `Bearer ${token}` } }
        )
            .then(function (response) {
                alert('Produto adicionado ao carrinho!');
            })
            .catch(function (error) {
                if (error.status === 401) {
                    alert('Erro: Token inválido ou não fornecido.');
                } else {
                    alert('Erro ao adicionar ao carrinho.');
                }
                console.error('Erro ao adicionar ao carrinho:', error);
            });
    };

    $scope.goToAddProduct = function () {
        $location.path('/add-product');
    };

    $scope.updateAuthStatus = function () {
        $scope.isLoggedIn = AuthService.isLoggedIn();
        $scope.isAdmin = AuthService.isAdmin();
    };

    $scope.updateAuthStatus();

    $rootScope.$on('auth:login', $scope.updateAuthStatus);
    $rootScope.$on('auth:logout', $scope.updateAuthStatus);

    $scope.loadProducts();
});
