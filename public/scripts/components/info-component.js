(function() {
    var infoComponent = {
        template: `
        <h1>This is the info component</h1>
        <div>
            <p> {{ $ctrl.beanInfo }} </p>
        </div>
        <div>
            <ul>
                <li> {{ $ctrl.simBean }} </li>
            </ul>
        </div>
        <div> <!-- directive that changes display to block or whatever to display on page -->
            <button ng-click="$ctrl.getPairings();">pairings</button>
            <button ng-click="$ctrl.getLocations();">locations</button>
        </div>
        <!--<div id="pairings">
            <ul>
                <li ng-repeat=""></li>
            </ul>
        </div>-->
        <div id="locations">
            <ul>
                <li> {{ $ctrl.beanInfo }} </li> <!-- locations from array of objects with locations, but using bean not the broad -->
            </ul>
        </div>
        `,
        controller: function(FlavorService) {
            var $ctrl = this;
            $ctrl.thisLocationNotForeverPleaseRemember = "Starbucks!";

            // pull in and return bean selection
            $ctrl.beanInfo = FlavorService.getBean();

            // similar beans
            $ctrl.simBean = FlavorService.getSimBean();

            // pairings
            $ctrl.pairings = "apple pie";
            $ctrl.getPairings = function() {
                console.log("probably chocolate or blueberry pie");
            };

            // locations
            $ctrl.getLocations = function() {
                console.log($ctrl.beanInfo);
                // show locations that subFlavor from service is available
                // beanInfo is used...somehow...for this
            };
        }
    };

    angular
        .module("app")
        .component("infoComponent", infoComponent);
})();