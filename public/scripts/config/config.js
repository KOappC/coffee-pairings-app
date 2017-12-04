(function() {

    angular
        .module("app")
        .config(function($routeProvider) {
            $routeProvider
                .when("/home", {
                    template: `<broad-component></broad-component>`
                })
                .when("/flavors", {
                    template: `<narrow-component></narrow-component>`
                })
                .when("/info", {
                    template: `<info-component></info-component>`
                })
                .otherwise("/home")
        });
})();