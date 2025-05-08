app.service('AuthService', function ($http, $window) {
    this.saveToken = function (token) {
        $window.localStorage.setItem('token', token);

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const role = payload.role;
            $window.localStorage.setItem('role', role);
        } catch (error) {
            console.error('Erro ao decodificar o token:', error);
        }
    };

    this.getToken = function () {
        return $window.localStorage.getItem('token');
    };

    this.getRole = function () {
        return $window.localStorage.getItem('role');
    };

    this.isLoggedIn = function () {
        return !!this.getToken();
    };

    this.isAdmin = function () {
        return this.getRole() === 'admin';
    };

    this.logout = function () {
        $window.localStorage.removeItem('token');
        $window.localStorage.removeItem('role');
    };

    this.login = function (user) {
        return $http.post('http://localhost:5500/auth/login', user);
    };

    this.register = function (user) {
        return $http.post('http://localhost:5500/auth/register', user);
    };
});
