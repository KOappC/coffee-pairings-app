(function () {
    var welcomeComponent = {
        template: `
            <div id="fore-ground">
                <h1 id="welcome-title" class="page-title">Flavor Town</h1>
                <div id="welcome-bean">
                    <img src="./images/bean140px.png" ng-click="$ctrl.flavorTown();" alt="bean">
                </div>
                <p id="home-description">Click on the bean to find your perfect coffee, based on flavors that you choose.  Drinking coffee will never be the same.  Welcome to Flavor Town!</p>
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