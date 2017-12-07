(function() {
    var infoComponent = {
        template: `
        <div class="menu-bar"> <!-- menu bar -->
                <h1 class="page-title">Flavor Town</h1>
                <i id="hamburger" class="material-icons" menu-directive>dehaze</i>
        </div>
        <div id="hidden-menu">
            <h3 ng-click="$ctrl.goHome();">Home</h3>
            <h3 ng-click="$ctrl.goFlavors();">Flavors</h3>
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
                <div id="show-locations" ng-click="$ctrl.getLocations();" location-directive> <i id="locate" class="material-icons">place</i>FIND LOCATIONS TO PURCHASE</div>
                <div id="show-pairings" pairings-directive><i id="pair" class="material-icons">place</i>GET FOOD PAIRINGS</div>
            </div>
            <i id="back-button" class="material-icons" ng-click="$ctrl.goBack();">navigate_before</i>
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
                    <li ng-repeat="items in $ctrl.finalLoc"> {{ items }} </li>
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
                for (var i = 0; i < $ctrl.locArr.length; i++) {
                    if ($ctrl.beanChoice === $ctrl.locArr[i].name) {
                        $ctrl.finalLoc = $ctrl.locArr[i].location;
                    }
                }

            };
            $ctrl.finalLoc = "";
            $ctrl.locArr = [
                {name: "decaf brazil", location: ["Roasting Plant", "Anthology Coffee"]},
                {name: "ethiopia yirgacheffe kochere", location: ["Dessert Oasis Coffee Roasters", "ASHE Supply Co"]},
                {name: "el salvador santa ana", location: ["Urban Bean Co", "New Order Coffee"]},
                {name: "burundi aa bumoco society", location: ["Germack Coffee Roasting Co", "Fourteen East"]},
                {name: "timor hibrido de timor", location: ["Cairo Coffee", "The Bottom Line Coffee House"]},
                {name: "ethiopia sidamo gerbicho killa", location: ["Fourteen East", "The Bottom Line Coffee House"]},
                {name: "decaf peru organic", location: ["ASHE Supply Co", "Germack Coffee Roasting Co"]},
                {name: "brazil mogiana", location: ["Anthology Coffee", "Urban Bean Co"]},
                {name: "brazil cerrado", location: ["Cairo Coffee", "New Order Coffee"]},
                {name: "jamaica blue mountain", location: ["Dessert Oasis Coffee Roasters", "Roasting Plant"]}

            ];


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
            $ctrl.goBeans = function() {
                $location.path("/beans");
            };

        }
    };

    angular
        .module("app")
        .component("infoComponent", infoComponent);
})();