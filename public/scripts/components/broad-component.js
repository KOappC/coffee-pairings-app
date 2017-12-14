(function() {
    var broadComponent = {
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
            
            <div class="flavor-body" id="desktop-background">
                <div id="coffee-bean">
                    <img src="./images/bean140px.png" alt="bean">
                </div>
                <div class="broad">
                    <div circle-colors class="little-circles" ng-repeat="items in $ctrl.broadArr" href="" ng-click="$ctrl.getFlavor(items);"> {{ items.name }} </div>
                </div>
                <div class="narrow">
                    <div class="narrow-circles" ng-repeat="items in $ctrl.narrowFlav" href="" ng-click="$ctrl.getSubFlavor(items);"> {{ items }} </div>
                </div>
				<div class="back-container" ng-click="$ctrl.goBack();">
					REFRESH
                	<i id="back-button" class="material-icons">refresh</i>
				</div>
            </div>
`,
        controller: function(FlavorService, $location, $route) {
            var $ctrl = this;
            $ctrl.narrowFlav = [];
            $ctrl.subFlavor = "";

            $ctrl.broadArr = [
                {name: "nutty", flavor: ["chocolate", "toasted marshmallow", "peanut brittle", "raw almond", "light caramel", "peanut butter cracker"]},
                {name: "roasted", flavor: ["milk chocolate", "dark chocolate", "black cherry", "fresh roasted peanut", "woody", "pipe tobacco"]},
                {name: "spicy", flavor: ["graham cracker", "granola", "clove", "peanut shell", "nutmeg", "anise"]},
                {name: "floral", flavor: ["berry tea", "herbal", "blueberry", "tart cherry", "green tea", "ripe strawberry"]},
                {name: "sour", flavor: ["apple skin", "pear", "toffee", "lime zest", "orange pith", "apple crisp"]},
                {name: "sweet", flavor: ["cane sugar", "vanilla bean", "sweet cream", "peach", "brown sugar", "milk chocolate"]}
                ];

            $ctrl.getFlavor = function(value) {
                $ctrl.narrowFlav = value.flavor;
                FlavorService.setSimBean(value.name);
            };

            $ctrl.getSubFlavor = function(value) {
                $ctrl.subFlavor = value;
                FlavorService.setBean(value);
            };

            $ctrl.goBack = function() {
                $route.reload();
            };

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
        .component("broadComponent", broadComponent)
})();