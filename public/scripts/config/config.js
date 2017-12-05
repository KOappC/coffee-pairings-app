(function() {

    angular
        .module("app")
        .config(function($routeProvider) {
            $routeProvider
                .when("/home", {
                    template: `<welcome-component></welcome-component>`
                })
                .when("/flavors", {
                    template: `<broad-component></broad-component>`
                })
                .when("/info", {
                    template: `<info-component></info-component>`
                })
                .when("/beans", {
                    template: `<beans-component></beans-component>`
                })
                .otherwise("/home")
        });
})();