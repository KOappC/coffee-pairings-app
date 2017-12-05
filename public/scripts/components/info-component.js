(function() {
    var infoComponent = {
        template: `
        <h1>Here's your bean!</h1>
        <div>
            <p> {{ $ctrl.beanChoice }} </p>
        </div>
        <div>
            <ul>
                <li ng-repeat="items in $ctrl.simBean track by $index"> {{ items }} </li>
            </ul>
        </div>
        <div> <!-- directive that changes display to block or whatever to display on page -->
            <button>pairings</button>
            <button ng-click="$ctrl.getLocations();">locations</button>
        </div>
        <div id="pairings">
            <ul>
                <h3>Pairings:</h3>
                <li ng-repeat="foods in $ctrl.getPairings track by $index"> {{ foods }} </li> <!-- pairings filtered by way of this variable...maybe -->
            </ul>
        </div>
        <div id="locations">
            <ul>
                <h3>Locations:</h3>
                <li> Coffee shops near you! </li> <!-- locations from array of objects with locations, but using bean not the broad -->
            </ul>
        </div>
        `,
        controller: function(FlavorService) {
            var $ctrl = this;

            $ctrl.beanChoice = FlavorService.passBean();

            // pull in and return bean selection
            $ctrl.beanInfo = FlavorService.getBean();

            // similar beans
            $ctrl.simBean = FlavorService.getSimBean();

            // pairings
            $ctrl.getPairings = FlavorService.getPairings();

            // locations
            $ctrl.getLocations = function() {
                console.log("clicking this will show/hide by use of a directive, in the future");
                // show locations that subFlavor from service is available
                // beanInfo is used...somehow...for this
            };
        }
    };

    angular
        .module("app")
        .component("infoComponent", infoComponent);
})();