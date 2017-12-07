(function() {
    var infoComponent = {
        template: `
        <div class="menu-bar"> <!-- menu bar -->
                <h1 class="page-title">Flavor Town</h1>
                <i id="hamburger" class="material-icons">dehaze</i>
        </div>
        <div class="hidden-menu">
            <h3 ng-click="$ctrl.goHome();">Home</h3>
            <h3 ng-click="$ctrl.goFlavors();">Flavors</h3>
            <h3 ng-click="$ctrl.goInfo();">Info</h3>
            <h3 ng-click="$ctrl.goBeans();">Beans</h3>
        </div>
        
        <!-- body -->
        <div class="flavor-body">
            <div id="final-bean">
                <p class="your-bean"> {{ $ctrl.beanChoice }} </p>
                <ul>
                    <li ng-repeat="items in $ctrl.simBean track by $index"> {{ items }} </li>
                </ul>
            </div>
            <div> <!-- directive that changes display to block or whatever to display on page -->
                <div id="show-locations" ng-click="$ctrl.getLocations();"> <i id="locate" class="material-icons">place</i>FIND LOCATIONS TO PURCHASE</div>
                <div id="show-pairings"><i id="pair" class="material-icons">place</i>GET FOOD PAIRINGS</div>
            </div>
            <p class="back-button" ng-click="$ctrl.goBack();">back</p>
        <!-- hidden divs -->
            <div id="pairings">
                <ul>
                    <h3>Pairings:</h3>
                    <li ng-repeat="foods in $ctrl.getPairings track by $index"> {{ foods }} </li>
                </ul>
            </div>
            <div id="locations">
                <ul>
                    <h3>Locations:</h3>
                    <li> Coffee shops near you! </li>
                </ul>
            </div>
        </div>
        
        `,
        controller: function(FlavorService, $location) {
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

            // back button path
            $ctrl.goBack = function() {
                $location.path("/flavors");
            };

            // nav functions
            $ctrl.goHome = function() {
                $location.path("/home");
            };
            $ctrl.goFlavors = function() {
                $location.path("/flavors");
            };
            $ctrl.goInfo = function() {
                $location.path("/info");
            };
            $ctrl.goBeans = function() {
                $location.path("/beans");
            };

        }
    };

    angular
        .module("app")
        .component("infoComponent", infoComponent);
})();