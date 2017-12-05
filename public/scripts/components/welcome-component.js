(function () {
    var welcomeComponent = {
        template: `
            <h1>Coffee Title</h1>
            <p>This is where a description about what our app does goes</p>
            <button ng-click="$ctrl.flavorTown();">Begin</button>
            `,
        controller: function($location) {
            var $ctrl = this;
            $ctrl.flavorTown = function() {
                $location.path("/flavors");
            }

        }
    };

    angular
        .module("app")
        .component("welcomeComponent", welcomeComponent);
})();