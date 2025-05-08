
app.controller('RegisterController', function ($scope, $http, $window) {
    $scope.user = {};

    $scope.register = function () {
        $http.post('http://localhost:5500/auth/register', $scope.user)
            .then(function (response) {
                alert('Usuário cadastrado com sucesso! Faça o login.');
                $window.location.href = '#!/login';
            })
            .catch(function (error) {
                alert('Erro ao cadastrar usuário.');
                console.error(error);
            });
    };
});
