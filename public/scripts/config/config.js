(function() {

    angular
        .module("app")
        .config(function($routeProvider) {
            $routeProvider
                .when("/home", {
                    template: `<h1>home</h1>`
                })
                .when("/flavors", {
                    template: `<h1>flavors</h1>`
                })
                .when("/info", {
                    template: `<h1>info</h1>`
                })
        });
})();