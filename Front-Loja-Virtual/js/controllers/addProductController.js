app.controller('AddProductController', function ($scope, $http) {
    $scope.product = {};

    $scope.addProduct = function () {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Você precisa estar logado como admin para cadastrar produtos!');
            window.location.href = '#!/login';
            return;
        }

        $http.post('http://localhost:5500/products', $scope.product, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(function (response) {
                alert('Produto cadastrado com sucesso!');
                window.location.href = '#!/products';
            })
            .catch(function (error) {
                alert('Erro ao cadastrar produto.');
                console.error(error);
            });
    };
});
