
app.controller('CartController', function ($scope, $http) {
    $scope.cartItems = [];

    $scope.loadCart = function () {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Você precisa estar logado para ver seu carrinho!');
            window.location.href = '#!/login';
            return;
        }

        $http.get('http://localhost:5500/cart', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(function (response) {
                $scope.cartItems = response.data;
            })
            .catch(function (error) {
                console.error('Erro ao carregar carrinho:', error);
            });
    };

    $scope.loadCart();
});
