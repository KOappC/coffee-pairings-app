(function() {
    var beansComponent = {
        template: `
            <div class="menu-bar">
                <h1 class="page-title">Flavor Town</h1>
                <i id="hamburger" class="material-icons" ng-click="$ctrl.toggleMenu();">dehaze</i>
            </div>
            
            <div class="hidden-menu" ng-class="{'menu-toggle': $ctrl.activeMenu};">
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goHome();">Home</h3>
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goFlavors();">Flavors</h3>
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goBeans();">Beans</h3>
            </div>
            
            <div class="all-beans">
                <p>all the coffees from the database</p>
            </div>
`,
        controller: function($location) {
            var $ctrl = this;
            $ctrl.activeMenu = false;
            $ctrl.toggleMenu = function() {
                $ctrl.activeMenu = !$ctrl.activeMenu;
            };

            $ctrl.goHome = function() {
                $location.path("/home");
            };
            $ctrl.goFlavors = function() {
                $location.path("/flavors");
            };
            $ctrl.goBeans = function() {
                $location.path("/beans");
            };
        }
    };

    angular
        .module("app")
        .component("beansComponent", beansComponent);
})();