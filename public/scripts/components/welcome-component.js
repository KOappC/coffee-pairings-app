(function () {
    var welcomeComponent = {
        template: `
            <div id="fore-ground">
                <h1 class="page-title">Coffee Title</h1>
                <div id="bean-button" ng-click="$ctrl.flavorTown();">Click me, I'm a bean</div>
                <p id="home-description">This is where a description about what our app does goes</p>
            </div>
            <div id="dark-background"></div> <!-- dark background on home page -->
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