(function() {
    var broadComponent = {
        template: `
            <h1>this is the broadComponent</h1>
            <div>
                <a ng-repeat="items in $ctrl.broadArr" href=""> {{ items }} </a>
            </div>
`,
        controller: function() {
            var $ctrl = this;
            $ctrl.broadArr = ["nutty", "roasted", "spicy", "floral", "earthy", "sour"];

        }
    };

    angular
        .module("app")
        .component("broadComponent", broadComponent)
})();