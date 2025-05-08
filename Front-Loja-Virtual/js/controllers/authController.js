app.controller('AuthController', function ($scope, $http, $window, $rootScope, AuthService) {
    $scope.user = {};

    $scope.login = function () {
        $http.post('http://localhost:5500/auth/login', $scope.user)
            .then(function (response) {
                AuthService.saveToken(response.data.token);
                $rootScope.$broadcast('auth:login');
                alert('Login realizado com sucesso!');
                $window.location.href = '#!/products';
            })
            .catch(function (error) {
                alert('Erro ao fazer login. Verifique suas credenciais.');
                console.error(error);
            });
    };

    $scope.logout = function () {
        AuthService.logout();
        $rootScope.$broadcast('auth:logout');
        alert('Logout realizado com sucesso!');
        $window.location.href = '#!/products';
    };

    $scope.updateAuthStatus = function () {
        $scope.isLoggedIn = AuthService.isLoggedIn();
        $scope.isAdmin = AuthService.isAdmin();
    };

    $scope.updateAuthStatus();

    $rootScope.$on('auth:login', $scope.updateAuthStatus);
    $rootScope.$on('auth:logout', $scope.updateAuthStatus);
});
