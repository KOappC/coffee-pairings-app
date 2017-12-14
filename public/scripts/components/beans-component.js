(function() {
    var beansComponent = {
        template: `
            <div class="menu-bar">
                <h1 class="page-title" ng-click="$ctrl.goHome();">Flavor Town</h1>
                <i id="hamburger" class="material-icons" ng-click="$ctrl.toggleMenu();">dehaze</i>
            </div>
            
            <div class="hidden-menu" ng-class="{'menu-toggle': $ctrl.activeMenu};">
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goHome();">Home</h3>
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goFlavors();">Flavors</h3>
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goBeans();">Beans</h3>
            </div>
            
            <div class="all-beans">
                <div class="bean-details" ng-repeat="items in $ctrl.pullLibrary" ng-click="$ctrl.getBrowseBean(items.bean);">
                    {{ items.bean }}
                    <p>Click for more information</p> 
                </div>
            </div>
`,
        controller: function($location, FlavorService) {
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

            FlavorService.setLibrary().then(function() {
                $ctrl.pullLibrary = FlavorService.getLibrary();
            });

            $ctrl.beanChoice = "";
            $ctrl.getBrowseBean = function(info) {
                beanChoice = info;
                FlavorService.setBrowseBean(info).then(function() {
                    $location.path("/info");
                });

            };




        }
    };

    angular
        .module("app")
        .component("beansComponent", beansComponent);
})();