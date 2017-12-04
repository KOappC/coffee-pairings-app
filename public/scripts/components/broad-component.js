(function() {
    var broadComponent = {
        template: `
            <h1>Make a choice</h1>
            <div class="broad">
                <a ng-repeat="items in $ctrl.broadArr" href="" ng-click="$ctrl.getFlavor(items);"> {{ items.name }} </a>
            </div>
            <div class="narrow">
                <a ng-repeat="items in $ctrl.narrowFlav" href="" ng-click="$ctrl.getSubFlavor(items);"> {{ items }} </a>
            </div>
`,
        controller: function(FlavorService) {
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

        }
    };

    angular
        .module("app")
        .component("broadComponent", broadComponent)
})();