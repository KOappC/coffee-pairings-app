(function() {
    var narrowComponent = {
        template: `
            <h1>narrow component HERE</h1>
            <div>
                <a ng-repeat="items in $ctrl.nuttyArr" href="" ng-click=""> {{ items }} </a>
            </div>
`,
        controller: function() {
            var $ctrl = this;
            $ctrl.nuttyArr = ["chocolate", "toasted marshmallow", "peanut brittle", "raw almond"];
            $ctrl.roastedArr = ["milk chocolate", "dark chocolate", "black cherry", "fresh roasted peanut"];
            $ctrl.spicyArr = ["graham cracker", "granola", "cloves", "peanut shell"];
            $ctrl.floralArr = ["berry tea", "herbal", "blueberry", "tart cherry", "green tea"];
            $ctrl.earthyArr = ["clay", "buttered toast"];
            $ctrl.sourArr = ["apple skin", "pear", "toffee", "lime zest", "orange pith"];
        }
    };

    angular
        .module("app")
        .component("narrowComponent", narrowComponent);
})();