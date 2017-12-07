(function() {
    var broadComponent = {
        template: `
            <div class="menu-bar"> <!-- menu bar -->
                <h1 class="page-title">Flavor Town</h1>
                <i id="hamburger" class="material-icons" menu-directive>dehaze</i>
            </div>
            
            <div id="hidden-menu">
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goHome();">Home</h3>
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goFlavors();">Flavors</h3>
                <h3 class="hidden-menu-hover" ng-click="$ctrl.goBeans();">Beans</h3>
            </div>
            
            <div class="flavor-body" id="desktop-background">
                <div id="coffee-bean">
                    <img src="./images/bean140px.png" alt="bean">
                </div>
                <div class="broad"> <!-- broad choices -->
                    <div circle-colors class="little-circles" ng-repeat="items in $ctrl.broadArr" href="" ng-click="$ctrl.getFlavor(items);"> {{ items.name }} </div>
                </div>
                <div class="narrow"> <!-- narrow choices -->
                    <div class="narrow-circles" ng-repeat="items in $ctrl.narrowFlav" href="" ng-click="$ctrl.getSubFlavor(items);"> {{ items }} </div>
                </div>
                <i id="back-button" class="material-icons" ng-click="$ctrl.goBack();">refresh</i>
            </div>
`,
        controller: function(FlavorService, $location, $route) {
            var $ctrl = this;
            $ctrl.narrowFlav = [];
            $ctrl.subFlavor = "";
            // pseudo db

            $ctrl.broadArr = [
                {name: "nutty", flavor: ["chocolate", "toasted marshmallow", "peanut brittle", "raw almond", "light caramel", "peanut butter cracker"]},
                {name: "roasted", flavor: ["milk chocolate", "dark chocolate", "black cherry", "fresh roasted peanut", "woody", "pipe tobacco"]},
                {name: "spicy", flavor: ["graham cracker", "granola", "clove", "peanut shell", "nutmeg", "anise"]},
                {name: "floral", flavor: ["berry tea", "herbal", "blueberry", "tart cherry", "green tea", "ripe strawberry"]},
                {name: "sour", flavor: ["apple skin", "pear", "toffee", "lime zest", "orange pith", "apple crisp"]},
                {name: "sweet", flavor: ["cane sugar", "vanilla bean", "sweet cream", "peach", "brown sugar", "milk chocolate"]}
                ];

            $ctrl.getFlavor = function(value) {
                // assign narrowFlav
                $ctrl.narrowFlav = value.flavor;
                FlavorService.setSimBean(value.name);
            };

            $ctrl.getSubFlavor = function(value) {
                // pull in narrowFlav and assign bean
                $ctrl.subFlavor = value;
                // passing sub flavor to service
                FlavorService.setBean(value);
            };

            //function here to send subflavor to service to info

            // back button path
            $ctrl.goBack = function() {
                $route.reload();
            };

            // nav functions
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