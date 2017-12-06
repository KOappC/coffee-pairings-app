(function () {
    var welcomeComponent = {
        template: `
            <div id="fore-ground">
                <h1 id="welcome-title" class="page-title">Coffee Title</h1>
                <div id="welcome-bean">
                    <img src="./images/bean140px.png" ng-click="$ctrl.flavorTown();" alt="bean">
                </div>
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