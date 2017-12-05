(function() {
    var broadComponent = {
        template: `
            <div class="menu-bar"> <!-- menu bar -->
                <h1 class="page-title">Coffee Title</h1>
            </div>
            <div class="flavor-body">
                <div class="broad"> <!-- broad choices -->
                    <div class="little-circles" ng-repeat="items in $ctrl.broadArr" href="" ng-click="$ctrl.getFlavor(items);"> {{ items.name }} </div>
                </div>
                <div class="narrow"> <!-- narrow choices -->
                    <div ng-repeat="items in $ctrl.narrowFlav" href="" ng-click="$ctrl.getSubFlavor(items);"> {{ items }} </div>
                </div>
                <p class="back-button" ng-click="$ctrl.goBack();">back</p>
            </div>
`,
        controller: function(FlavorService, $location) {
            var $ctrl = this;
            $ctrl.narrowFlav = [];
            $ctrl.subFlavor = "";
            // pseudo db

            $ctrl.broadArr = [{name: "nutty", flavor: ["chocolate", "toasted marshmallow", "peanut brittle", "raw almond"]},
                {name: "roasted", flavor: ["milk chocolate", "dark chocolate", "black cherry", "fresh roasted peanut"]},
                {name: "spicy", flavor: ["graham cracker", "granola", "cloves", "peanut shell"]},
                {name: "floral", flavor: ["berry tea", "herbal", "blueberry", "tart cherry", "green tea"]},
                {name: "earthy", flavor: ["clay", "buttered toast"]},
                {name: "sour", flavor: ["apple skin", "pear", "toffee", "lime zest", "orange pith"]}];

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
                $location.path("/home");
            }

        }
    };

    angular
        .module("app")
        .component("broadComponent", broadComponent)
})();