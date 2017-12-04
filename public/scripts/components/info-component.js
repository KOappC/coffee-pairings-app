(function() {
    var infoComponent = {
        template: `
        <h1>This is the info component</h1>
        <div>
            <p> {{ $ctrl.beanInfo }} </p>
        </div>
        <div>
            <ul>
                <li ng-repeat=""> {{ <!--similar--> }} </li>
            </ul>
        </div>
        <div>
            <button ng-click="$ctrl.getPairings();">pairings</button>
            <button ng-click="$ctrl.getLocations();">locations</button>
        </div>
        `,
        controller: function(FlavorService) {
            var $ctrl = this;
            // pull in and return bean selection
            $ctrl.beanInfo = FlavorService.getBean();
            // similar beans
            $ctrl.simBeans = [];
            // pairings
            $ctrl.pairings = [];
            $ctrl.getPairings = function() {
                console.log("probably chocolate or blueberry pie");
            };
            // locations
            $ctrl.getLocations = function() {
                console.log("a coffee shop");
            };
        }
    };

    angular
        .module("app")
        .component("infoComponent", infoComponent);
})();